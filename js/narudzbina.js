$(document).ready(function() {
   
    let korpa = localStorage.getItem('korpa');
    if(!korpa){
        return;
    }
    let narudzbine = JSON.parse(korpa);
    console.log("aaaa");
    let lista = document.getElementById('lista');

// Prolazak kroz svaku narudžbinu u nizu
narudzbine.forEach((narudzbina,index) => {
    // Kreiranje novog <li> elementa za stavku
    // let stavka = document.createElement('li');
    // stavka.className = 'list-group-item';
    // stavka.textContent = `${narudzbina.jelo} - Količina: ${narudzbina.kolicina} - Porcija:${narudzbina.porcija}`;

    // // Dodavanje <li> elementa u <ul>
    // lista.appendChild(stavka);
    let stavka = document.createElement('li');
    stavka.className = 'list-group-item d-flex justify-content-between align-items-center';
    stavka.innerHTML = `
        <span>${narudzbina.jelo} - Količina: <span id = "kolicina${index}" class="kolicina">${narudzbina.kolicina}</span> - Porcija: ${narudzbina.porcija}</span>
        <div>
            <button id = "minus${index}" class="btn btn-sm btn-outline-secondary me-2">-</button>
            <button id = "plus${index}" class="btn btn-sm btn-outline-secondary">+</button>
        </div>
    `;
    // Dodavanje <li> elementa u <ul>
    lista.appendChild(stavka);
    document.getElementById(`minus${index}`).addEventListener('click', kreirajPromeniKolicinuListener(index, -1));
    document.getElementById(`plus${index}`).addEventListener('click', kreirajPromeniKolicinuListener(index, 1));
    // Kreiranje novog <li> elementa za cenu
   
});
vrednost = localStorage.getItem('vrednost');

let stavka = document.createElement('li');
stavka.className = 'list-group-item';
stavka.setAttribute('id', `vrednost`);
stavka.textContent = `Ukupna cena: $${vrednost}`;
lista.appendChild(stavka);

const finalizeButton = document.getElementById('finalize');

    finalizeButton.addEventListener('click', () => {
        let currentOrder = {
            items: JSON.parse(localStorage.getItem('korpa')),
            vrednost: localStorage.getItem('vrednost')
        };
        let orderHistory = localStorage.getItem('orderHistory');
        if (!orderHistory) {
            orderHistory = [];
        } else {
            orderHistory = JSON.parse(orderHistory);
        }
        orderHistory.push(currentOrder);

        // Čuvanje ažurirane list narudžbina u lokalnom skladištu
        localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
        // Obrisi korpu iz localStorage
        localStorage.removeItem('korpa');
        localStorage.removeItem('vrednost');
        // Očisti HTML element koji prikazuje stavke korpe
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }

        // Prikazi poruku da je narudžbina finalizovana (opciono)
        alert('Narudžbina je finalizovana! Korpa je ispražnjena.');
    });
    function promeniKolicinu(index, promena) {
        let spanId = `kolicina${index}`;
        let kolicinaElement = document.getElementById(spanId);
        let novaKolicina = parseInt(kolicinaElement.textContent) + promena;

        let korpa = localStorage.getItem('korpa');
        let narudzbine = JSON.parse(korpa);
        let cena = localStorage.getItem('vrednost');
        cena = parseInt(cena) + promena * narudzbine[index].cena;
        localStorage.setItem('vrednost', cena);
        if (novaKolicina <= 0) {
            let lista = document.getElementById('lista');
            let stavkaZaBrisanje = kolicinaElement.parentElement.parentElement;
            lista.removeChild(stavkaZaBrisanje);
            narudzbine.splice(index, 1);
            if(cena == 0){
                lista.removeChild(document.getElementById('vrednost'));
                localStorage.removeItem('korpa')
            }else{
                document.getElementById('vrednost').textContent = `Ukupna cena: $${cena}`;
                localStorage.setItem('korpa', JSON.stringify(narudzbine));
            }
            //obrisi iz korpee

        } else {
            kolicinaElement.textContent = novaKolicina;
            document.getElementById('vrednost').textContent = `Ukupna cena: $${cena}`;
        }
       
       
    }
    function kreirajPromeniKolicinuListener(index, promena) {
        return function() {
            promeniKolicinu(index, promena);
        };
    }

})
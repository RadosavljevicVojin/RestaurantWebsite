$(document).ready(function() {
   
    let korpa = localStorage.getItem('korpa');
    let korpa2 = localStorage.getItem('korpa2');
    if(!korpa){
        return;
    }
    let narudzbine = [];
    if(localStorage.getItem('jezik') == 'srp'){
        narudzbine = JSON.parse(korpa);
    }else{
        narudzbine = JSON.parse(korpa2);
    }
    
    console.log("aaaa");
    let lista = document.getElementById('lista');

// Prolazak kroz svaku narudžbinu u nizu
narudzbine.forEach((narudzbina,index) => {
   
    let stavka = document.createElement('li');
    stavka.className = 'list-group-item d-flex justify-content-between align-items-center';
    var jezik = localStorage.getItem('jezik');
    if (jezik === 'srp'){
        stavka.innerHTML = `
        <span>${narudzbina.jelo} - Količina: <span id = "kolicina${index}" class="kolicina">${narudzbina.kolicina}</span> - Porcija: ${narudzbina.porcija}</span>
        <div>
            <button id = "minus${index}" class="btn btn-sm btn-outline-secondary me-2">-</button>
            <button id = "plus${index}" class="btn btn-sm btn-outline-secondary">+</button>
        </div>
    `;
    }else{
        stavka.innerHTML = `
        <span>${narudzbina.jelo} - Quantity: <span id="kolicina${index}" class="kolicina">${narudzbina.kolicina}</span> - Portion: ${narudzbina.porcija}</span>
        <div>
            <button id="minus${index}" class="btn btn-sm btn-outline-secondary me-2">-</button>
            <button id="plus${index}" class="btn btn-sm btn-outline-secondary">+</button>
        </div>
    `;
    }
   
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
if(localStorage.getItem('jezik') == 'srp'){
    stavka.textContent = `Ukupna cena: $${vrednost}`;
}else{
    stavka.textContent = `Total price: $${vrednost}`;
}

lista.appendChild(stavka);

const finalizeButton = document.getElementById('finalize');

    finalizeButton.addEventListener('click', () => {
        let currentOrder = {
            items: JSON.parse(localStorage.getItem('korpa')),
            vrednost: localStorage.getItem('vrednost')
        };
        let currentOrder2 = {
            items: JSON.parse(localStorage.getItem('korpa2')),
            vrednost: localStorage.getItem('vrednost')
        };
        let orderHistory = localStorage.getItem('orderHistory');
        let orderHistory2 = localStorage.getItem('orderHistory2');
        if (!orderHistory) {
            orderHistory = [];
            orderHistory2 = [];
        } else {
            orderHistory = JSON.parse(orderHistory);
            orderHistory2 = JSON.parse(orderHistory2);
        }
        orderHistory.push(currentOrder);
        orderHistory2.push(currentOrder2);

        // Čuvanje ažurirane list narudžbina u lokalnom skladištu
        localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
        localStorage.setItem('orderHistory2', JSON.stringify(orderHistory2));
        // Obrisi korpu iz localStorage
        localStorage.removeItem('korpa');
        localStorage.removeItem('korpa2');
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

        // Dodato: Provera jezika i izbor odgovarajuće korpe
        let korpa = localStorage.getItem('korpa');
        let korpa2 = localStorage.getItem('korpa2');
        let narudzbine = JSON.parse(korpa);
        let narudzbine2 = JSON.parse(korpa2);

        let cena = localStorage.getItem('vrednost');
        cena = parseInt(cena) + promena * narudzbine[index].cena;
        localStorage.setItem('vrednost', cena);
        if (novaKolicina <= 0) {
            let lista = document.getElementById('lista');
            let stavkaZaBrisanje = kolicinaElement.parentElement.parentElement;
            lista.removeChild(stavkaZaBrisanje);
            narudzbine.splice(index, 1);
            narudzbine2.splice(index,1);
            if(cena == 0){
                lista.removeChild(document.getElementById('vrednost'));
                localStorage.removeItem('korpa')
                localStorage.removeItem('korpa2');
            }else{
                document.getElementById('vrednost').textContent = `Ukupna cena: $${cena}`;
                localStorage.setItem('korpa', JSON.stringify(narudzbine));
                localStorage.setItem('korpa2', JSON.stringify(narudzbine2));
            }

            //obrisi iz korpee

        } else {
            
            kolicinaElement.textContent = novaKolicina;
            document.getElementById('vrednost').textContent = `Ukupna cena: $${cena}`;
            narudzbine[index].kolicina = novaKolicina
            narudzbine2[index].kolicina = novaKolicina
            localStorage.setItem('korpa', JSON.stringify(narudzbine));
            localStorage.setItem('korpa2', JSON.stringify(narudzbine2));


        }
       
       
    }
    function kreirajPromeniKolicinuListener(index, promena) {
        return function() {
            promeniKolicinu(index, promena);
        };
    }

})
document.getElementById('oceniBtn').addEventListener('click', function() {
    let ocena = 0;
    // Pročitajte ocenu iz radio buttona
    let stars = document.getElementsByName('rating');
    let id = document.getElementById('hidden')
    for (let i = 0; i < stars.length; i++) {
        if (stars[i].checked) {
            ocena = parseInt(stars[i].value);
            break;
        }
    }
    if (ocena === 0) {
        var jezik = localStorage.getItem('jezik');
        if (jezik === 'srp') {
            alert('Molimo vas izaberite ocenu!');
        } else {
            alert('Please select a rating!');
        }
        return;
    }

    // Dohvati jela iz localStorage
    let jela = localStorage.getItem('jela');
    let jela2 = localStorage.getItem('jela2');
    
    if (jela) {
        let nizJela = JSON.parse(jela);
        let nizJela2 = JSON.parse(jela2);
        for(let i = 0;i < nizJela.length;i++){
            
            if(nizJela[i].id == id.value){
                
                nizJela[i].brojOcena += 1;
                nizJela[i].sumaOcena += ocena;
                nizJela[i].prosecnaOcena = nizJela[i].sumaOcena * 1.0 /nizJela[i].brojOcena;
                nizJela2[i].brojOcena += 1;
                nizJela2[i].sumaOcena += ocena;
                nizJela2[i].prosecnaOcena = nizJela[i].sumaOcena * 1.0 /nizJela[i].brojOcena;
                break;
            }
        }
        nizJela.sort((a,b) => parseFloat(b.prosecnaOcena) - parseFloat(a.prosecnaOcena));
        nizJela2.sort((a,b) => parseFloat(b.prosecnaOcena) - parseFloat(a.prosecnaOcena));
        for(let i = 0;i < nizJela.length;i++){
            console.log(nizJela[i].ime);
        }
        localStorage.setItem('jela', JSON.stringify(nizJela));
        localStorage.setItem('jela2', JSON.stringify(nizJela2));

        // Obavestite korisnika da je ocena uspešno ažurirana
        alert('Uspešno ste ocenili jelo!');
    }
});
document.getElementById("dodajBtn").addEventListener("click", function() {
    let cenaButtons = document.getElementsByName("cena");
    let cenaSelected = false;
    let val;
    let velicina;
    for (let i = 0; i < cenaButtons.length; i++) {
        if (cenaButtons[i].checked) {
            cenaSelected = true;
            val = cenaButtons[i].value;
            if(i == 0){
                velicina = "S";
            }else{
                velicina = "L";
            }
            break;
        }
    }

    if (!cenaSelected) {
        var jezik = localStorage.getItem('jezik');
        if (jezik === 'srp') {
            alert("Morate izabrati cenu pre dodavanja u korpu!");
        } else {
            alert("You must select a price before adding to the cart!");
        }
        return;
    }
    let korpa = localStorage.getItem('korpa');
    let korpa2 = localStorage.getItem('korpa2');
    let vrednost = localStorage.getItem('vrednost')
    if(vrednost){
      vrednost = parseInt(vrednost);
    }else{
        vrednost = 0;
    }
    var id = localStorage.getItem('jeloId');
    var ime;
    var niz = []
    if(localStorage.getItem('srp')){
        niz = JSON.parse(localStorage.getItem('jela'));
    }else{
        niz = JSON.parse(localStorage.getItem('jela2'));
    }
    ime = niz[parseInt(id)].ime;
    let lista = []
    let lista2 = []
    if(korpa){
        if(localStorage.getItem('jezik') == 'srp'){
            lista = JSON.parse(korpa);
            lista2 = JSON.parse(korpa2);
        }else{
            lista = JSON.parse(korpa2);
            lista2 = JSON.parse(korpa);
        }
        lista = JSON.parse(korpa); 
        let flag = true;
        for(let i = 0;i < lista.length;i++){
            if(lista[i].jelo == document.getElementById('jeloIme').textContent && lista[i].porcija == velicina){
                flag = false;
                lista[i].kolicina +=1
                lista2[i].kolicina +=1
                break;
            }
        }
        if(flag){
            lista.push(
                {
                    jelo:document.getElementById('jeloIme').textContent,
                    kolicina:1,
                    porcija:velicina,
                    cena:val
                }
            
            );
            
            lista2.push(
                {
                    jelo:ime,
                    kolicina:1,
                    porcija:velicina,
                    cena:val 
                }
            )
        }

    }else{
        lista.push(
            {
                jelo:document.getElementById('jeloIme').textContent,
                kolicina:1,
                porcija:velicina,
                cena:val
            }
        );
        lista2.push(
            {
                jelo:ime,
                kolicina:1,
                porcija:velicina,
                cena:val 
            }
        )
    }
    if(localStorage.getItem('jezik') == 'srp'){
        localStorage.setItem('korpa', JSON.stringify(lista));
        localStorage.setItem('korpa2', JSON.stringify(lista2));
    }else{
        localStorage.setItem('korpa', JSON.stringify(lista2));
        localStorage.setItem('korpa2', JSON.stringify(lista));
    }
    
    vrednost += parseInt(val);
    localStorage.setItem('vrednost', vrednost);


    // Ovde dodajte logiku za dodavanje u korpu
    var jezik = localStorage.getItem('jezik');
    if (jezik === 'srp') {
        alert("Uspešno ste dodali u korpu!");
    } else {
        alert("Successfully added to the cart!");
    }
});
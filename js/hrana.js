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
        alert('Molimo vas izaberite ocenu!');
        return;
    }

    // Dohvati jela iz localStorage
    let jela = localStorage.getItem('jela');

    if (jela) {
        let nizJela = JSON.parse(jela);
        console.log(nizJela.length);
        console.log(id.value);
        console.log("idijevi");
        for(let i = 0;i < nizJela.length;i++){
            console.log(nizJela[i].id);
            if(nizJela[i].id == id.value){
                console.log("usaooo");
                nizJela[i].brojOcena += 1;
                nizJela[i].sumaOcena += ocena;
                nizJela[i].prosecnaOcena = nizJela[i].sumaOcena * 1.0 /nizJela[i].brojOcena;
                break;
            }
        }
        nizJela.sort((a,b) => parseFloat(b.prosecnaOcena) - parseFloat(a.prosecnaOcena));
        for(let i = 0;i < nizJela.length;i++){
            console.log(nizJela[i].ime);
        }
        localStorage.setItem('jela', JSON.stringify(nizJela));

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
                velicina = "mala";
            }else{
                velicina = "velika";
            }
            break;
        }
    }

    if (!cenaSelected) {
        alert("Morate izabrati cenu pre dodavanja u korpu!");
        return;
    }
    let korpa = localStorage.getItem('korpa');
    let vrednost = localStorage.getItem('vrednost')
    if(vrednost){
      vrednost = parseInt(vrednost);
    }else{
        vrednost = 0;
    }
    let lista = []
    if(korpa){
        lista = JSON.parse(korpa); 
        let flag = true;
        for(let i = 0;i < lista.length;i++){
            if(lista[i].jelo ==document.getElementById('ime').textContent && lista[i].porcija == velicina){
                flag = false;
                lista[i].kolicina +=1
                break;
            }
        }
        if(flag){
            lista.push(
                {
                    jelo:document.getElementById('ime').textContent,
                    kolicina:1,
                    porcija:velicina,
                    cena:val
                }
            );
        }

    }else{
        lista.push(
            {
                jelo:document.getElementById('ime').textContent,
                kolicina:1,
                porcija:velicina,
                cena:val
            }
        );
    }
    localStorage.setItem('korpa', JSON.stringify(lista));
    vrednost += parseInt(val);
    localStorage.setItem('vrednost', vrednost);


    // Ovde dodajte logiku za dodavanje u korpu
    alert("Uspesno ste dodali u korpu!");
});
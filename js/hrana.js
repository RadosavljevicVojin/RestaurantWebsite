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
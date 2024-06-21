$(document).ready(function() {
    // Provera da li postoji ulaz za jela u localStorage
    
    let jela = localStorage.getItem('jela');
    let nizJela = []
    if (!jela) {
        console.log("aaaaa")
        // Ako ulaz ne postoji, kreiraj niz od 9 elemenata sa statičkim podacima
        nizJela = [
            {
                id:1,
                ime: 'Pohovani kraljevski gambori',
                slika: 'img/kinezi_jelo_1.png',
                opis: 'Pohovani hrskavi kraljevski gambori, prženi sa solju i biberom.',
                sumaOcena: 0,
                brojOcena: 0,
                prosecnaOcena: 0
            },
            {
                id:2,
                ime: 'Pržene mekane krabe',
                slika: 'img/kinezi_jelo_2.png',
                opis: 'Pržene mekane krabe iz Jadranskog mora',
                sumaOcena: 0,
                brojOcena: 0,
                prosecnaOcena: 0
            },
            {
                id:3,
                ime: 'Prženi svinjski kotleti',
                slika: 'img/kinezi_jelo_3.png',
                opis: 'Prženi svinjski kotleti umočeni u naš specijalni sos',
                sumaOcena: 0,
                brojOcena: 0,
                prosecnaOcena: 0
            },
            {
                id:4,
                ime: 'Palačinke sa prženim prsima od patke',
                slika: 'img/kinezi_predjelo_1.png',
                opis: '',
                sumaOcena: 0,
                brojOcena: 0,
                prosecnaOcena: 0
            },
            {
                id:5,
                ime: 'Palačinke sa jagnjetinom',
                slika: 'img/kinezi_predjelo_2.png',
                opis: '',
                sumaOcena: 0,
                brojOcena: 0,
                prosecnaOcena: 0
            },
            {
                id:6,
                ime: 'Satai piletina na ražnju',
                slika: 'img/kinezi_predjelo_3.png',
                opis: '',
                sumaOcena: 0,
                brojOcena: 0,
                prosecnaOcena: 0
            },
            {
                id:7,
                ime: 'Pohovani sladoled',
                slika: 'img/slatko_1.png',
                opis: 'Pohovani sladoled sa prelivom od čokolade i prahom od pistaća',
                sumaOcena: 0,
                brojOcena: 0,
                prosecnaOcena: 0
            },
            {
                id:8,
                ime: 'Rolnice sa bananom',
                slika: 'img/slatko_2.png',
                opis: 'Pržene rolnice sa bananom i kremom',
                sumaOcena: 0,
                brojOcena: 0,
                prosecnaOcena: 0
            },
            {
                id:9,
                ime: 'Mus od čokolade',
                slika: 'img/slatko_3.png',
                opis: 'Sočan mus od čokolade',
                sumaOcena: 0,
                brojOcena: 0,
                prosecnaOcena: 0
            }
        ];
        
        // Pretvori niz u JSON string i sačuvaj u localStorage
        localStorage.setItem('jela', JSON.stringify(nizJela));
    }else{
        nizJela = JSON.parse(jela)
        console.log("bbb")
    }
    for (let i = 0; i < 3; i++) {
        let dish = nizJela[i];
        let imgElement = document.getElementById('img' + (i + 1));
        let imeElement = document.getElementById('ime' + (i + 1));
        let ocenaElement = document.getElementById('ocena' + (i + 1));
        let opisElement = document.getElementById('opis' + (i + 1));
    
        imgElement.src = dish.slika;
        imeElement.textContent = dish.ime;
        ocenaElement.textContent = dish.prosecnaOcena + '/5';
        opisElement.textContent = dish.opis;
    }

});
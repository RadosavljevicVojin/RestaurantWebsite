$(document).ready(function() {
    // Provera da li postoji ulaz za jela u localStorage
    var pathname = window.location.pathname;
    console.log("Current Pathname: " + pathname);
    let jela = localStorage.getItem('jela');
    let jezik = localStorage.getItem('jezik');
    if (pathname.includes('index.html')){
        localStorage.setItem('jezik','srp')
    }else{
        localStorage.setItem('jezik','eng')
    }
    let nizJela = []
    let nizJela2 = []
    if (!jela) {
        console.log("aaaaa")
        // Ako ulaz ne postoji, kreiraj niz od 9 elemenata sa statičkim podacima
        nizJela = [
            {
                id:1,
                ime: 'Pohovani kraljevski gambori',
                slika: '../img/kinezi_jelo_1.png',
                opis: 'Pohovani hrskavi kraljevski gambori, prženi sa solju i biberom.',
                sumaOcena: 0,
                brojOcena: 0,
                prosecnaOcena: 0,
                tip:'glavno',
                cenamala: 55,
                cenavelika: 75
            },
            {
                id:2,
                ime: 'Pržene mekane krabe',
                slika: '../img/kinezi_jelo_2.png',
                opis: 'Pržene mekane krabe iz Jadranskog mora',
                sumaOcena: 0,
                brojOcena: 0,
                tip:'glavno',
                prosecnaOcena: 0,
                cenamala: 55,
                cenavelika: 75
            },
            {
                id:3,
                ime: 'Prženi svinjski kotleti',
                slika: '../img/kinezi_jelo_3.png',
                opis: 'Prženi svinjski kotleti umočeni u naš specijalni sos',
                sumaOcena: 0,
                brojOcena: 0,
                prosecnaOcena: 0,
                tip:'glavno',
                cenamala: 65,
                cenavelika: 85
            },
            {
                id:4,
                ime: 'Palačinke sa prženim prsima od patke',
                slika: '../img/kinezi_predjelo_1.png',
                opis: 'Palacinke sa prženim prsima od patke, uz prilog dobijate nase zacine',
                sumaOcena: 0,
                brojOcena: 0,
                tip:'pred',
                prosecnaOcena: 0,
                cenamala: 25,
                cenavelika: 35
            },
            {
                id:5,
                ime: 'Palačinke sa jagnjetinom',
                slika: '../img/kinezi_predjelo_2.png',
                opis: 'Palacinke sa jagnjetinom, uz prilog dobijate nase zacine',
                sumaOcena: 0,
                tip:'pred',
                brojOcena: 0,
                prosecnaOcena: 0,
                cenamala: 25,
                cenavelika: 35
            },
            {
                id:6,
                ime: 'Satai piletina na ražnju',
                slika: '../img/kinezi_predjelo_3.png',
                opis: 'Piletina na kineski nacin',
                sumaOcena: 0,
                tip:'pred',
                brojOcena: 0,
                prosecnaOcena: 0,
                cenamala: 30,
                cenavelika: 40
            },
            {
                id:7,
                ime: 'Pohovani sladoled',
                slika: '../img/slatko_1.png',
                opis: 'Pohovani sladoled sa prelivom od čokolade i prahom od pistaća',
                sumaOcena: 0,
                brojOcena: 0,
                tip:'slatko',
                prosecnaOcena: 0,
                cenamala: 25,
                cenavelika: 35
            },
            {
                id:8,
                ime: 'Rolnice sa bananom',
                slika: '../img/slatko_2.png',
                opis: 'Pržene rolnice sa bananom i kremom',
                sumaOcena: 0,
                brojOcena: 0,
                prosecnaOcena: 0,
                tip:'slatko',
                cenamala: 20,
                cenavelika: 30
            },
            {
                id:9,
                ime: 'Mus od čokolade',
                slika: '../img/slatko_3.png',
                opis: 'Sočan mus od čokolade',
                sumaOcena: 0,
                tip:'slatko',
                brojOcena: 0,
                prosecnaOcena: 0,
                cenamala: 20,
                cenavelika: 30
            }
        ];
        nizJela2 = [
            {
                id: 1,
                ime: 'Fried Royal Shrimps',
                slika: '../img/kinezi_jelo_1.png',
                opis: 'Fried crispy royal shrimps, fried with salt and pepper.',
                sumaOcena: 0,
                tip:'glavno',
                brojOcena: 0,
                prosecnaOcena: 0,
                cenamala: 55,
                cenavelika: 75
            },
            {
                id: 2,
                ime: 'Fried Soft Crabs',
                slika: '../img/kinezi_jelo_2.png',
                opis: 'Fried soft crabs from the Adriatic Sea.',
                sumaOcena: 0,
                tip:'glavno',
                brojOcena: 0,
                prosecnaOcena: 0,
                cenamala: 55,
                cenavelika: 75
            },
            {
                id: 3,
                ime: 'Fried Pork Chops',
                slika: '../img/kinezi_jelo_3.png',
                opis: 'Fried pork chops dipped in our special sauce.',
                sumaOcena: 0,
                brojOcena: 0,
                tip:'glavno',
                prosecnaOcena: 0,
                cenamala: 65,
                cenavelika: 85
            },
            {
                id: 4,
                ime: 'Pancakes with Fried Duck Breast',
                slika: '../img/kinezi_predjelo_1.png',
                opis: 'Pancakes with fried duck breast, served with our spices.',
                sumaOcena: 0,
                tip:'pred',
                brojOcena: 0,
                prosecnaOcena: 0,
                cenamala: 25,
                cenavelika: 35
            },
            {
                id: 5,
                ime: 'Pancakes with Lamb',
                slika: '../img/kinezi_predjelo_2.png',
                opis: 'Pancakes with lamb, served with our spices.',
                sumaOcena: 0,
                brojOcena: 0,
                tip:'pred',
                prosecnaOcena: 0,
                cenamala: 25,
                cenavelika: 35
            },
            {
                id: 6,
                ime: 'Satay Chicken Skewers',
                slika: '../img/kinezi_predjelo_3.png',
                opis: 'Chicken skewers in Chinese style.',
                sumaOcena: 0,
                brojOcena: 0,
                tip:'pred',
                prosecnaOcena: 0,
                cenamala: 30,
                cenavelika: 40
            },
            {
                id: 7,
                ime: 'Fried Ice Cream',
                slika: '../img/slatko_1.png',
                opis: 'Fried ice cream with chocolate topping and pistachio powder.',
                sumaOcena: 0,
                brojOcena: 0,
                tip:'slatko',
                prosecnaOcena: 0,
                cenamala: 25,
                cenavelika: 35
            },
            {
                id: 8,
                ime: 'Banana Rolls',
                slika: '../img/slatko_2.png',
                opis: 'Fried rolls with banana and cream.',
                sumaOcena: 0,
                brojOcena: 0,
                tip:'slatko',
                prosecnaOcena: 0,
                cenamala: 20,
                cenavelika: 30
            },
            {
                id: 9,
                ime: 'Chocolate Mousse',
                slika: '../img/slatko_3.png',
                opis: 'Delicious chocolate mousse.',
                sumaOcena: 0,
                tip:'slatko',
                brojOcena: 0,
                prosecnaOcena: 0,
                cenamala: 20,
                cenavelika: 30
            }
        ];
        // Pretvori niz u JSON string i sačuvaj u localStorage
        localStorage.setItem('jela', JSON.stringify(nizJela));
        localStorage.setItem('jela2', JSON.stringify(nizJela2));
    }else{
        nizJela = JSON.parse(jela)
        nizJela2 = JSON.parse(localStorage.getItem('jela2'));
        console.log("bbb")
    }
    for (let i = 0; i < 3; i++) {
        let dish;
        if(localStorage.getItem('jezik') == 'srp'){
           dish = nizJela[i];
        }else{
            dish = nizJela2[i];
        }
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
document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.tab-pane .row');
    if(localStorage.getItem('jezik') == 'srp'){
        nizJela = JSON.parse(localStorage.getItem('jela'));
    }else{
        nizJela = JSON.parse(localStorage.getItem('jela2'));
    }
    // Ako container nije pronađen, izađi
    if (!container) return;

    // Kreiraj HTML za prva tri jela
    var htmlContent = '';
    for (var i = 0; i < 9 && i < nizJela.length; i++) {
        if(nizJela[i].id > 3) continue;
        var jelo = nizJela[i];
        if(localStorage.getItem('jezik') == 'srp'){
            htmlContent += `
            <div class="col-lg-6">
                <a href="jeloPregled.html?id=${jelo.id}">
                    <div class="d-flex align-items-center">
                        <img class="flex-shrink-0 img-fluid rounded" src="${jelo.slika}" alt="" style="width: 80px;">
                        <div class="w-100 d-flex flex-column text-start ps-4">
                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                                <span>${jelo.ime}</span>
                                <span class="text-primary">$${jelo.cenamala} | $${jelo.cenavelika}</span>
                            </h5>
                            <small class="fst-italic">${jelo.opis}</small>
                        </div>
                    </div>
                </a>
            </div>
        `;
        }else{
            htmlContent += `
            <div class="col-lg-6">
                <a href="jeloPregledEng.html?id=${jelo.id}">
                    <div class="d-flex align-items-center">
                        <img class="flex-shrink-0 img-fluid rounded" src="${jelo.slika}" alt="" style="width: 80px;">
                        <div class="w-100 d-flex flex-column text-start ps-4">
                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                                <span>${jelo.ime}</span>
                                <span class="text-primary">$${jelo.cenamala} | $${jelo.cenavelika}</span>
                            </h5>
                            <small class="fst-italic">${jelo.opis}</small>
                        </div>
                    </div>
                </a>
            </div>
        `;
        }
    }

    // Dodaj generisani HTML u container
    container.innerHTML = htmlContent;
    
    document.getElementById('searchButton').addEventListener('click', function () {
        

        const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
        let niz = []
        if(localStorage.getItem('jezik') == 'srp'){
           niz = JSON.parse(localStorage.getItem('jela'));
        }else{
          niz = JSON.parse(localStorage.getItem('jela2')); 
        }
        let found = false;
        for (let i = 0; i < niz.length; i++) {
            if (niz[i].ime.toLowerCase() === searchTerm) {
                // Preusmeravanje na stranicu sa detaljima o jelu
                if(localStorage.getItem('jezik') == 'srp'){
                    window.location.href = `jeloPregled.html?id=${niz[i].id}`;
                }else{
                    window.location.href = `jeloPregledEng.html?id=${niz[i].id}`;
                }
                found = true;
                break; // Prekinuti petlju ako je pronađeno
            }
        }
    });



});


// Definišite funkciju za sortiranje po ceni

document.getElementById('naziv').addEventListener('click', function (event) {
   
    updateMenu('naziv')
});
document.getElementById('cena').addEventListener('click', function (event) {
    
    updateMenu('cena')
});

function updateMenu(type) {
    var container = document.querySelector('.tab-pane .row');
    if(localStorage.getItem('jezik') == 'srp'){
        nizJela = JSON.parse(localStorage.getItem('jela'));
    }else{
        nizJela = JSON.parse(localStorage.getItem('jela2'));
    }
    // Ako container nije pronađen, izađi
    if (!container) return;
    let niz = []
    let temp = 0;
    for(let i = 0;i<nizJela.length;i++){
        if(nizJela[i].tip == 'glavno'){
            niz[temp] = nizJela[i];
            temp++;
        }
    }
    if(type == 'naziv'){
        niz.sort((a, b) => a.ime.localeCompare(b.ime));
    }else{
        niz.sort((a, b) => parseFloat(a.cenamala) - parseFloat(b.cenamala));
    }
    // Kreiraj HTML za prva tri jela
    var htmlContent = '';
    for (var i = 0; i < niz.length; i++) {
        var jelo = niz[i];
        if(localStorage.getItem('jezik') == 'srp'){
            htmlContent += `
            <div class="col-lg-6">
                <a href="jeloPregled.html?id=${jelo.id}">
                    <div class="d-flex align-items-center">
                        <img class="flex-shrink-0 img-fluid rounded" src="${jelo.slika}" alt="" style="width: 80px;">
                        <div class="w-100 d-flex flex-column text-start ps-4">
                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                                <span>${jelo.ime}</span>
                                <span class="text-primary">$${jelo.cenamala} | $${jelo.cenavelika}</span>
                            </h5>
                            <small class="fst-italic">${jelo.opis}</small>
                        </div>
                    </div>
                </a>
            </div>
        `;
        }else{
            htmlContent += `
            <div class="col-lg-6">
                <a href="jeloPregledEng.html?id=${jelo.id}">
                    <div class="d-flex align-items-center">
                        <img class="flex-shrink-0 img-fluid rounded" src="${jelo.slika}" alt="" style="width: 80px;">
                        <div class="w-100 d-flex flex-column text-start ps-4">
                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                                <span>${jelo.ime}</span>
                                <span class="text-primary">$${jelo.cenamala} | $${jelo.cenavelika}</span>
                            </h5>
                            <small class="fst-italic">${jelo.opis}</small>
                        </div>
                    </div>
                </a>
            </div>
        `;
        }
    }

    // Dodaj generisani HTML u container
    container.innerHTML = htmlContent;
}


// Funkcija za dobijanje query parametara iz URL-a
function getQueryParams() {
    const params = {};
    window.location.search.replace(/^\?/, '').split('&').forEach(param => {
        const [key, value] = param.split('=');
        params[key] = decodeURIComponent(value);
    });
    return params;
}

// Učitavanje podataka o jelu na osnovu ID-a iz query parametra
$(document).ready(function() {
    
    const params = getQueryParams();
    const jeloId = params.id;

    if (jeloId) {
        const jela = JSON.parse(localStorage.getItem('jela'));
        const jelo = jela.find(item => item.id == jeloId);
        
   

        if (jelo) {
            let mala = parseInt(jelo.cenamala)
            let velika = parseInt(jelo.cenavelika)
            $("#hidden").val(jelo.id);
            $('#jeloSlika').attr('src', jelo.slika);
            $('#jeloIme').text(jelo.ime);
            $('#jeloOpis').text(jelo.opis);
            $('#jeloOcena').text(jelo.prosecnaOcena);

            $('#cenam').val(mala); // Postavljamo vrednost za cenamala
            $('#cenama').text('$' + mala); // Ispisujemo tekst sa cenom za cenamala

            $('#cenav').val(velika); // Postavljamo vrednost za cenavelika
            $('#cenave').text('$' + velika); // Ispisujemo tekst sa cenom za cenavelika

            if (jelo.id >= 1 && jelo.id <= 3) {
                $('.breadcrumb-item a').attr('href', 'menu_jela.html');
            } else if (jelo.id >= 4 && jelo.id <= 6) {
                $('.breadcrumb-item a').attr('href', 'menu_predjela.html');
            } else if (jelo.id >= 7) {
                $('.breadcrumb-item a').attr('href', 'menu_slatko.html');
            }
        }
    }

    //$('#spinner').fadeOut();
});
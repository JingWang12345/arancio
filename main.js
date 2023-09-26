function loadAranci() {
    ArancioService.getAranci().then(aranci => renderPage(aranci))
}
loadAranci();

function renderPage(data) {
    console.log(data);
    const aranciContainer = document.getElementById('aranci-container');
    aranciContainer.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        const arancio = data[i];
        const container = document.createElement('div');
        container.classList.add('card');
        const template = `
                <div class="card-text">
                <h2>${arancio.name.common}</h2>
                <p>Capital: ${arancio.capital}</p>
                <p>Population: ${arancio.population}</p>
                <p>Official: ${arancio.name.official}</p>
                <div>${arancio.flag}</div>
                 </div>
            `
        container.innerHTML = template;
        aranciContainer.appendChild(container);

    }
}

function orderName() {
 
    const data = arancio.name.common;

    // Ordina l'array per il campo 'name' in ordine alfabetico crescente
    data.sort((a, b) => {
        const nameA = a.name.toLowerCase(); // Converte i nomi in minuscolo per l'ordinamento senza distinzione tra maiuscole e minuscole
        const nameB = b.name.toLowerCase();
        return nameA.localeCompare(nameB);
    });

    // Ora l'array 'data' è ordinato per il campo 'name' in ordine alfabetico crescente.
    // Puoi fare ciò che vuoi con i dati ordinati, ad esempio visualizzarli a schermo o eseguire altre operazioni.
}

function orderPopolazione() {
 
    arancio.sort(function (a, b) {
        return a.population - b.population;
    });

    renderPage();
        }
    

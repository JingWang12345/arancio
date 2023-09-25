function loadAranci() {
    ArancioService.getAranci().then(aranci => renderPage(aranci))
}
loadAranci();

function renderPage(data) {
    console.log(data);
    const aranciContainer= document.getElementById('aranci-container');
    aranciContainer.innerHTML='';
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
                 </div>
            `
            container.innerHTML=template;
            aranciContainer.appendChild(container);
     
}
}
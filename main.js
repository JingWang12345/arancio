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

function orderName(arancio) {
    return arancio.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        
        if (nameA < nameB) {
            return -1;
        }
        
        if (nameA > nameB) {
            return 1;
        }
        
        return 0;
    });
}
const aranciData =[arancio.name.common];
const sortedAranci = orderName(aranciData);
console.log(sortedAranci);

// function orderName(){
//     data.sort((a, b) => {
//         const nameA = a.name.common.toLowerCase(); 
//         const nameB = b.name.common.toLowerCase();
        
//         if (nameA < nameB) {
//           return -1; 
//         }
        
//         if (nameA > nameB) {
//           return 1; 
//         }
        
//         return 0; 
//       });
    
//       loadAranci();
// }

// function orderName(data, name) {
//     let btn = document.getElementById('btn-name')
//     return arancio.sort((a, b) => {
//       const nameA = a[name].toLowerCase();
//       const nameB = b[name].toLowerCase();
  
//       if (nameA < nameB) {
//         return -1; 
//       }
  
//       if (nameA > nameB) {
//         return 1; 
//       }
  
//       return 0; 
//     });
//   }




// function orderPopolazione() {
 
//    aranci.sort(function (a, b) {
//         return a.population - b.population;
//     });

//     renderPage();
//         }
    
        // function orderName(arr, property) {
        //     return arr.sort((a, b) => {
        //         const nameA = a[property].toLowerCase();
        //         const nameB = b[property].toLowerCase();

        //         if (nameA < nameB) {
        //             return -1;
        //         }

        //         if (nameA > nameB) {
        //             return 1;
        //         }

        //         return 0;
        //     });
        // }

        // const aranciContainer = document.getElementById('aranci-container');
        // const sortByNameButton = document.getElementById('btn-name');

        // const aranciData = [
        //     arancio.name.common
        // ];

        // function renderData(data) {
        //     aranciContainer.innerHTML = '';
        //     data.forEach(data => {
        //         const li = document.createElement('li');
        //         li.textContent = data.name;
        //         aranciContainer.appendChild(li);
        //     });
        // }

        // sortByNameButton.addEventListener('click', () => {
        //     const sortedData = orderName(aranciData, 'name');
        //     renderData(sortedData);
        // });

        // // Iniziale rendering dei dati
        // renderData(aranciData);
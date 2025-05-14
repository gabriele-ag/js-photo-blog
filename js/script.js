// Estraggo elementi del DOM
const elemCard = document.querySelector("#card-block")
const elemOverlay = document.querySelector(".overlay")

axios
.get("https://lanciweb.github.io/demo/api/pictures/").then((resp) => {
    console.log(resp.data)

    // Dopo aver dichiarato la funzione, creo le card
    const card = cards(resp.data)
    elemCard.innerHTML = card
    
    // Estraggo gli elementi del DOM per crearmi l'overlay con immagine
    const elemDivCard = document.querySelectorAll('.card')
    const overlayUp = overlay(elemDivCard, resp)

    
    elemOverlay.innerHTML = overlayUp
    
})
        


/////// Funzioni ///

// Funzione per la creazione delle card
function cards(elemento) {
    let result = '';
    for (let i = 0; i < elemento.length; i++) {
            const {date, url, title} = elemento[i]
            console.log(date, url, title)
            result += `<div class="card p-xy">
                            <img class="pin" src="./img/pin.svg" alt="pin-card">
                            <img class="img-card" src="${url}" alt="img-card">
                            <div class="ptop-15">
                                <p class="card-date">${date}</p>
                                <h2 class="font-site card-title">${title}</h2>
                            </div>
                        </div>`;
    }
    return result
}


// Funzione per creazione dell'overlay visualizzabile una volta cliccato sulle card
function overlay(elemento, resp) {
    elemento.forEach((curDiv, index) => {
        console.log(curDiv)
        curDiv.addEventListener('click', (evento) => {
            evento.preventDefault()
            elemOverlay.innerHTML = `<button id="btn">Chiudi</button>
                                    <img class="img-overlay" src="${resp.data[index].url}" alt="img-overlay">`
                                            
                                            
            elemOverlay.style.display = "flex";
             
             

            const elemBtn = document.querySelector("#btn")
            console.log(elemBtn)

            elemBtn.addEventListener("click", (evento) => {
                    evento.preventDefault();
                    elemOverlay.style.display = "none";
            })
            
        })
        
    })

}
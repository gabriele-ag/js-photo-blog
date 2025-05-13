// console.log("ciao")
// Estraggo elementi del DOM
const elemCard = document.querySelector("#card-block")
const elemOverlay = document.querySelector(".overlay")


axios
    .get("https://lanciweb.github.io/demo/api/pictures/").then((resp) => {
        let result = "";
        console.log(resp.data)

        // Eseguo ciclo per creare le card
        for (let i = 0; i < resp.data.length; i++) {
            const {date, url, title} = resp.data[i]
            console.log(date, url, title)
            result += `<div class="card p-xy">
                            <img class="pin" src="./img/pin.svg" alt="pin-card">
                            <img class="img-card" src="${url}" alt="img-card">
                            <div class="ptop-15">
                                <p class="card-date">${date}</p>
                                <h2 class="font-site card-title">${title}</h2>
                            </div>
                        </div>`     
        }


        elemCard.innerHTML = result



        // Estraggo gli elementi del DOM per crearmi l'overlay con immagine
        const elemDivCard = document.querySelectorAll('.card')
        
        elemDivCard.forEach((curDiv, index) => {
            console.log(curDiv)
            curDiv.addEventListener('click', (evento) => {
                evento.preventDefault()
                elemOverlay.innerHTML = `<button id="btn">Chiudi</button>
                                         <img class="img-overlay" src="${resp.data[index].url}" alt="img-overlay">`
                                            
                                            
                elemOverlay.style.display = "flex";

                // Aggiungo l'evento per chiudere l'overlay
            const elemBtn = document.querySelector("#btn")
            elemBtn.addEventListener("click", (evento) => {
                evento.preventDefault();
                elemOverlay.style.display = "none";
            });
        })

    });
      
});
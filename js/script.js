// console.log("ciao")

const elemCard = document.querySelector("#card-block")
console.log(elemCard)


axios
    .get("https://lanciweb.github.io/demo/api/pictures/").then((resp) => {
        let result = "";
        console.log(resp.data)
        for (let i = 0; i < resp.data.length; i++) {
            const {date, url, title} = resp.data[i]
            console.log(date, url, title)
            result += `<div class="card p-xy">
                            <img src="${url}" alt="img-card">
                            <p class="card-date">${date}</p>
                            <h2 class="font-site">${title}</h2>
                        </div>`
                
        }
        elemCard.innerHTML = result
        
    }) 

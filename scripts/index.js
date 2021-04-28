const url = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1"

function getApi(){
   return axios.get(url)
            .then(response => response.data.products)
}

async function criaCards(){
    const arrayDeProdutos = await getApi();
    const cardContainer = document.querySelector(".card-container");
  

    const listaDeProdutos = arrayDeProdutos.reduce((accumulator, element)=>{
        accumulator += ` 
            <li class="card">
                <img src="${element.image}" alt="">
                <p>${element.name}</p>
                <p>${element.description}</p>
                <span>de:${element.oldPrice}</span>
                <span class="price">por: ${element.price}</span>

                <span>ou 2x de 0,50 centavos</span>
                <button class="card-button">comprar</button>
            </li>
        `
        return accumulator
    }, '')

    cardContainer.innerHTML = listaDeProdutos;
}

function maisProdutos(){
    const cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = criaCards();
}
criaCards();
console.log(
    getApi()

)

'use strict'

// monta os cards
const montarCard = (dados) => {
    let card = document.createElement('div')
    let img = document.createElement('img')
    let container = document.createElement('div')
    let text = document.createElement('p')

    card.className = 'card'
    text.textContent = dados.name
    img.src = dados.image
    img.alt = `imagem da personagem ${dados.name}.`

    container.replaceChildren(text)
    card.replaceChildren(img, container)

    return card
}

// atualiza a página
export const atualizarPagina = async (dados, cardContainer) => {
    console.log(dados)
    const cards = dados.map(montarCard)
    cardContainer.replaceChildren(...cards)
}
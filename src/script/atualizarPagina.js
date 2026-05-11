'use strict'

// monta os cards
const montarCard = (dados) => {
    let card = document.createElement('div')
    let img = document.createElement('img')
    let container = document.createElement('div')
    let name = document.createElement('p')

    card.className = 'card'
    card.id = dados.id
    name.textContent = dados.name
    img.src = dados.image
    img.alt = `imagem da personagem ${dados.name}.`

    container.replaceChildren(name)
    card.replaceChildren(img, container)

    return card
}

const montarCardDetails = (dados) => {
    let card = document.createElement('div')
    let img = document.createElement('img')
    let container = document.createElement('div')
    let nameP = document.createElement('p')
    let speciesP = document.createElement('p')
    let genderP = document.createElement('p')
    let originP = document.createElement('p')
    let locationP = document.createElement('p')
    let episodesP = document.createElement('p')
    let nameSpan = document.createElement('span')
    let speciesSpan = document.createElement('span')
    let genderSpan = document.createElement('span')
    let originSpan = document.createElement('span')
    let locationSpan = document.createElement('span')
    let episodesSpan = document.createElement('span')

    nameP.textContent = "Name: "
    speciesP.textContent = "Species: "
    genderP.textContent = "Gender: "
    originP.textContent = "Origin: "
    locationP.textContent = "Location: "
    episodesP.textContent = "Episodes: "

    nameSpan.textContent = dados.name
    speciesSpan.textContent = dados.species
    genderSpan.textContent = dados.gender
    originSpan.textContent = dados.origin.name
    locationSpan.textContent = dados.location.name
    episodesSpan.textContent = dados.episode.length

    nameP.appendChild(nameSpan)
    speciesP.appendChild(speciesSpan)
    genderP.appendChild(genderSpan)
    originP.appendChild(originSpan)
    locationP.appendChild(locationSpan)
    episodesP.appendChild(episodesSpan)

    card.id = 'details-card'

    img.src = dados.image
    img.alt = `imagem da personagem ${dados.name}.`
    container.id = 'details-container'

    container.replaceChildren(nameP, speciesP, genderP, originP, locationP, episodesP)
    card.replaceChildren(img, container)

    return card
}

// atualiza a página
export const atualizarPagina = async (dados, cardContainer, details = false) => {
    if(!dados) return false
    if(details){
        let card = montarCardDetails(dados)
        cardContainer.replaceChildren(card)
        return
    }
    let cards = dados.map(montarCard)
    cardContainer.replaceChildren(...cards)
}
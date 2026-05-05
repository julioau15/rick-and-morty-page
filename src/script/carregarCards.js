'use strict'

import { filtrarDados } from "./buscarDados.js" 
const inputPersonagem = document.getElementById('input-personagem').value
const selectStatus = document.getElementById('select-status').value 
const selectSpecies = document.getElementById('select-species').value
const cardContainer = document.getElementById('card-container')

const dados = await filtrarDados('alive','human', 1)

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

console.log(dados)

const cards = dados.map(montarCard)

cardContainer.replaceChildren(...cards)



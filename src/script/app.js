'use strict'
import { filtrarDados, buscarById } from "./buscarDados.js"
import { atualizarPagina } from "./atualizarPagina.js"
const inputPersonagem   = document.getElementById('input-personagem')
const selectStatus      = document.getElementById('select-status') 
const selectSpecies     = document.getElementById('select-species')
const cardContainer     = document.getElementById('card-container')
const btnAvancar        = document.getElementById('avancar')
const btnVoltar         = document.getElementById('voltar')

let page = 1
const dadosFiltrados = await filtrarDados(selectStatus.value,selectSpecies.value,inputPersonagem.value, page)
await atualizarPagina(dadosFiltrados, cardContainer)

selectStatus.addEventListener('change', async () => {
    let dados = await filtrarDados(selectStatus.value,selectSpecies.value,inputPersonagem.value, page)
    if(dados) await atualizarPagina(dados, cardContainer)
})

selectSpecies.addEventListener('change', async () => {
    let dados = await filtrarDados(selectStatus.value,selectSpecies.value,inputPersonagem.value, page)
    if(dados) await atualizarPagina(dados, cardContainer)
})

inputPersonagem.addEventListener('focusout', async () => {
    let dados = await filtrarDados(selectStatus.value,selectSpecies.value,inputPersonagem.value, page)
    if(dados) await atualizarPagina(dados, cardContainer)
})

inputPersonagem.addEventListener('keydown', async (event) => {
    if(String(event.key).toLowerCase() == 'enter'){
        let dados = await filtrarDados(selectStatus.value,selectSpecies.value,inputPersonagem.value, page)
        if(dados) await atualizarPagina(dados, cardContainer)
    }
})

btnVoltar.addEventListener('click', async () => {
    if(page > 1){
        page--
        let dados = await filtrarDados(selectStatus.value,selectSpecies.value,inputPersonagem.value, page)
        if(dados) await atualizarPagina(dados, cardContainer)
        return
    }
    let dados = await filtrarDados(selectStatus.value,selectSpecies.value,inputPersonagem.value, page)
    if(dados) await atualizarPagina(dados, cardContainer)
})

btnAvancar.addEventListener('click', async () => {
    if(page < 42){
        page++
        let dados = await filtrarDados(selectStatus.value,selectSpecies.value,inputPersonagem.value, page)
        if(dados) await atualizarPagina(dados, cardContainer)
        return
    }
    let dados = await filtrarDados(selectStatus.value,selectSpecies.value,inputPersonagem.value, page)
    if(dados) await atualizarPagina(dados, cardContainer)
})

cardContainer.addEventListener('click', async (event) => {
    const card = event.target.closest('.card')
    if(!card) return

    const dados = await buscarById(Number(card.id))
    if(dados) await atualizarPagina(dados, cardContainer, true)
    
})

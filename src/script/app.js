'use strict'
import { filtrarDados } from "./buscarDados.js"
import { atualizarPagina } from "./atualizarPagina.js"
const inputPersonagem = document.getElementById('input-personagem')
const selectStatus = document.getElementById('select-status') 
const selectSpecies = document.getElementById('select-species')
const cardContainer = document.getElementById('card-container')

const page = 1

selectStatus.addEventListener('change', async () => {
    const dados = await filtrarDados(selectStatus.value,selectSpecies.value,inputPersonagem.value, page)
    await atualizarPagina(dados, cardContainer)
})

'use strict'

// volta todos os dados
const getDataCharacter = async (page = 1) => {
    const url      = `https://rickandmortyapi.com/api/character?page=${page}` 
    const response = await fetch(url)                              
    const data     = await response.json()                         
    return data
}

// filtra pelo status
const filtrarStatus = async (status, data) => {
    let dados = data.results
    let dadosStatus = []
    let encontrado = false
    dados.forEach(dado => {
        if(String(dado.status).toLowerCase() == String(status).toLowerCase()){
            dadosStatus.push(dado)
            encontrado = true
        }
    })

    if(encontrado)
        return dadosStatus

    return encontrado
}

// filtra pela especie
const filtrarEspecie = async (especie, data) => {
    let dados = data.results
    let dadosEspecie = []
    let encontrado = false
    dados.forEach(dado => {
        if(String(dado.species).toLowerCase() == String(especie).toLowerCase()){
            dadosEspecie.push(dado)
            encontrado = true
        }
    })

    if(encontrado)
        return dadosEspecie

    return encontrado
}

// filtro completo
export const filtrarDados = async (status, especie, page) => {
    let data = await getDataCharacter(page)
    let dadosEspecie = await filtrarEspecie(especie, data)
    let dadosStatus = await filtrarStatus(status, data)
    let dadosFiltrados = []
    let encontrado = false

    if(!dadosEspecie || !dadosStatus)
        return encontrado
    
    dadosEspecie.forEach(dado => {
        if(dadosStatus.toString().toLowerCase().includes(String(dado).toLowerCase())){
            dadosFiltrados.push(dado)
            encontrado = true
        }
    })

    if(encontrado)
        return dadosFiltrados

    return encontrado
}

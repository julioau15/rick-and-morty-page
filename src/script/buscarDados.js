'use strict'

// volta todos os dados
const getDataCharacter = async () => {
    const url      = `https://rickandmortyapi.com/api/character?page=1` 
    const response = await fetch(url)                              
    const data     = await response.json()                         
    return data
}

// filtra pelo status
const filtrarStatus = async (data,status) => {
    let dados = data.results
    let dadosStatus = []
    let encontrado = false

    if(status == undefined || status == '' || status == null)
        return dados
    
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
const filtrarEspecie = async (data,especie) => {
    let dados = data.results
    let dadosEspecie = []
    let encontrado = false

    if(especie == undefined || especie == '' || especie == null)
        return dados

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

// filtra pelo nome
const filtrarNome = async (data,nome) => {
    let dados = data.results
    let dadosNome = []
    let encontrado = false

    if(nome == undefined || nome == '' || nome == null)
        return dados

    dados.forEach(dado => {
        if(String(dado.name).toLowerCase() == String(nome).toLowerCase()){
            dadosNome.push(dado)
            encontrado = true
        }
    })

    if(encontrado)
        return dadosNome

    return encontrado
}

// filtro completo
export const filtrarDados = async (status, especie, nome) => {
    let data = await getDataCharacter()

    let dadosEspecie = await filtrarEspecie(data,especie)
    let dadosStatus = await filtrarStatus(data,status)
    let dadosNome = await filtrarNome(data,nome)

    console.log(dadosNome)

    let dadosFiltrados = []
    let encontrado = false

    if(!dadosEspecie || !dadosStatus || !dadosNome)
        return encontrado
    
    dadosEspecie.forEach(dado => {
        let listaNomes = []
        let listaStatus = []
        dadosNome.forEach(dadoNome => listaNomes.push(dadoNome.name))
        dadosStatus.forEach(dadoStatus => listaStatus.push(dadoStatus.status))

        if(listaNomes.toString().toLowerCase().includes(String(dado.name).toLowerCase())&&
           listaStatus.toString().toLowerCase().includes(String(dado.status).toLowerCase())){
            dadosFiltrados.push(dado)
            encontrado = true
        }
    })

    console.log(dadosFiltrados)

    if(encontrado)
        return dadosFiltrados

    return encontrado
}

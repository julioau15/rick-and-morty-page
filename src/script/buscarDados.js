

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
const filtrarDados = async (status, especie, data) => {
    let dadosEspecie = await filtrarEspecie(especie)
    let dadosStatus = await filtrarStatus(status)
    let dadosFiltrados = []
    let encontrado = false


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
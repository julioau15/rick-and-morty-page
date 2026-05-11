'use strict'
// filtro completo
export const filtrarDados = async (status, especie, nome, page) => {
    let url = `https://rickandmortyapi.com/api/character?page=${page}`

    if(nome) url += `&name=${nome}`
    if(status) url += `&status=${status}`
    if(especie) url += `&species=${especie}`
    
    const response = await fetch(url)
    const data = await response.json()

    if(data.error) return false

    return data.results
}

export const buscarById = async (id) => {
    let url = `https://rickandmortyapi.com/api/character/${id}`
    const response = await fetch(url)
    const data = await response.json()

    if(data.error) return false

    return data
}
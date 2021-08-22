import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'

interface IPokemon {
  height: number
  weight: number
  name: string
  types: { type: { name: string } }[]
  abilities: { ability: { name: string } }[]
  sprites: { other: { 'official-artwork': { front_default: string } } }
}

interface IParams {
  pokemon: string
}

const Pokemon: React.FC = () => {
  const [pokemon, setPokemon] = useState<IPokemon>()
  const { pokemon: pokemonName } = useParams<IParams>()

  const getPokemonInfo = async () => {
    const { data } = await api.get<IPokemon>(`pokemon/${pokemonName}`)

    setPokemon(data)
  }

  useEffect(() => {
    getPokemonInfo()
  }, [])

  return <h1>pagina do pokemon: {pokemonName}</h1>
}

export default Pokemon

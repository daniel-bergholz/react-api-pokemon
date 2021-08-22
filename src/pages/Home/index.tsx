import { useState } from 'react'
import PokemonLogo from '../../assets/images/pokemon.png'
import PokemonItem from '../../components/PokemonItem'
import api from '../../services/api'
import styles from './styles.module.css'

function Home() {
  const [pokemons, setPokemons] = useState()

  const getAllPokemons = async () => {
    const { data } = await api.get('pokemon')

    setPokemons(data.results)
  }

  console.log({ pokemons })

  return (
    <div className={styles.container}>
      <img
        src={PokemonLogo}
        alt="Pokemon Logo"
        onClick={() => getAllPokemons()}
      />
      <PokemonItem name="pikachu" />
      <PokemonItem name="charmander" />
      <PokemonItem name="bulbasauro" />
      <PokemonItem name="ditto" />
      <PokemonItem name="delibird" />
      <PokemonItem name="mantine" />
    </div>
  )
}

export default Home

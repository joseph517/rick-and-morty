import { useState } from 'react';
import './App.css';
import Characters from './component/Characters';
import imgRickMorty from "./img/rick-morty.png"

function App() {
  const [characters, setCharacters] = useState(null)
  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json()
    setCharacters(characterApi.results)
  }
  console.log(characters)
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='tittle'> Rick and Morty </h1>

        {characters ? <Characters /> :
          <>
            <img src={imgRickMorty} alt='Rick anf Morty' className='img-home' />
            <button onClick={reqApi} className='btn-search' >Buscar personajes</button>
          </>}

      </header>
    </div>
  );
}

export default App;

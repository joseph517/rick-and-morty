import React, { useEffect, useState } from 'react'
import Characters from '../component/Characters'



const CharactersPages = () => {
    const [characters, setCharacters] = useState(null)

    useEffect(() => {
        reqApi()
    }, [])

    const reqApi = async () => {
        const api = await fetch('https://rickandmortyapi.com/api/character')
        const characterApi = await api.json()
        console.log(characterApi)
        setCharacters(characterApi.results)
    }
    return (
        <div className='App'>
            {!characters ? <p></p> :
                <>
                    <h1 className='title'>Personajes</h1>
                    <div>
                        <Characters characters={characters} />
                    </div>
                </>}
        </div>
    )
}

export default CharactersPages
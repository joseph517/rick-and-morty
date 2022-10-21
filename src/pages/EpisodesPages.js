import React, { useState, useEffect } from 'react'
import Episodes from '../component/Episodes'

const EpisodesPages = () => {

    const [episodes, setEpisodes] = useState(null)

    useEffect(() => {
        reqApi()
    }, [])

    const reqApi = async () => {
        const api = await fetch('https://rickandmortyapi.com/api/episode')
        const episodeApi = await api.json()
        setEpisodes(episodeApi.results)
    }
    console.log(episodes)



    return (
        <div className='App'>
            {!episodes ? <p></p> :
                <>
                    <h1 className='title'>Episodios</h1>
                    <div>
                        <Episodes episodes={episodes} />
                    </div>
                </>}
        </div>
    )
}

export default EpisodesPages
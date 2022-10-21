import React, { useState, useEffect } from 'react'

const EpisodesPages = () => {

    const [episode, setEpisodes] = useState(null)

    useEffect(() => {
        reqApi()
    }, [])

    const reqApi = async () => {
        const api = await fetch('https://rickandmortyapi.com/api/episode')
        const episodeApi = await api.json()
        setEpisodes(episodeApi.results)
    }
    console.log(episode)



    return (
        <div>EpisodesPages</div>
    )
}

export default EpisodesPages
import React from 'react'
import imgRickMorty from "../img/rick-morty.png"
import { useNavigate } from 'react-router-dom'


const Home = () => {
    let history = useNavigate()
    const characters = () => {
        history("/characters");
    }
    const episodes = () => {
        history("/episodes");
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1 className='title'> Rick and Morty </h1>
                <img src={imgRickMorty} alt='RickAndMorty' className='img-home' />
                <div>
                    <ul className='list-group'>
                        <li className='list-group-item'>
                            <button className='btn-search' type='button' onClick={characters}>Personajes</button>
                        </li>
                        <li className='list-group-item'>
                            <button onClick={episodes} className='btn-search'>Episodios</button>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Home
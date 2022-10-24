import { useNavigate } from "react-router-dom"
import Search from "./Search"



const Characters = (props) => {

    let navigate = useNavigate()
    const { characters } = props

    const onClick = () => {
        navigate('/')
    }

    return (
        <div className="characters">
            <div>
                <button onClick={onClick} className="btn-search">Home</button>
            </div>
            <div className="container-characters">
                {characters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === 'Alive' ?
                                    (<>
                                        <span className='alive'>
                                            Alive
                                        </span>
                                    </>)
                                    :
                                    (<>
                                        <span className="dead">
                                            Dead
                                        </span>
                                    </>)
                                }
                            </h6>
                            <p>
                                <span className="text-grey">Episodios:{character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie:</span>
                                <span>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <button onClick={onClick} className='btn-search'>Home</button>
            </div>
        </div>
    )
}

export default Characters
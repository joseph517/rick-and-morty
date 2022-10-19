
const Characters = (props) => {
    const { characters } = props
    console.log(characters)

    return (
        <div className="characters">
            <span className='back-home'>Home</span>
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Characters
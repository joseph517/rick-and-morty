import { useNavigate } from "react-router-dom"

const Episodes = (props) => {

    let navigate = useNavigate()

    const { episodes } = props

    const onClick = () => {
        navigate('/')
    }

    return (
        <div className="characters">
            <div>
                <button onClick={onClick} className='btn-search'>Home</button>
            </div>
            <div className="container-characters">
                {episodes.map((episodes, index) => (
                    <div className="episode-container" key={index}>
                        <div className="card text-white bg-dark " style={{ maxWidth: "18rem" }}>
                            <div className="card-header">{episodes.name}</div>
                            <div className="card-body">
                                <h5 className="card-title">{episodes.episode}</h5>
                                <p className="card-text">{episodes.air_date}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Episodes
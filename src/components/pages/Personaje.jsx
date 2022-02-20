import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Personaje() {
  const [character, setCharacter] = useState();
  const [episode, setEpisode] = useState();

  const { id } = useParams();

  const URLCHARACTER = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    axios.get(URLCHARACTER).then((res) => {
      setCharacter(res.data);
    });
  }, []);

  useEffect(() => {
    if (character) {
      let peticionesEpisodios = character.episode.map((episodio) => {
        return axios.get(episodio);
      });
      Promise.all(peticionesEpisodios).then((res) => {
        setEpisode(res);
      });
    }
  }, [character]);
  console.log(episode);
  return (
    <div className="container text-dark">
      <div className="  card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={character?.image}
              style={{ height: "100%", objectFit: "cover" }}
              className="img-fluid rounded-start"
              alt={character?.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title mb-0 text-red">{character?.name} </h4>
              <p>
                <span className="EstiloCiruclo"></span>
                {character?.status} {character?.species}
              </p>

              <p className="mb-0 text-muted">Last kanow</p>
              <p>{character?.location ? character.location.name : ""}</p>
              <p className="mb-0 text-muted"> Origin</p>
              <p>{character?.origin ? character.origin.name : ""}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {episode
          ? episode.map((episodio) => {
              return (
                <div
                  className="card col-2 ml-2 mb-2 "
                  style={{ marginLeft: ".8em", width: "18rem" }}
                  key={episodio.data.id}
                >
                  <div className="card-body">
                    <h5>
                      {" "}
                      Nombre episodio:
                      <br />
                      <br /> {episodio.data.name}
                    </h5>
                    <p>{episodio.data.air_date}</p>
                    <p>{episodio.data.episode}</p>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

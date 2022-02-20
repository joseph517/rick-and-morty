import { Link } from "react-router-dom";

export function CharacterItem(props) {
  return (
    <div
      className="col-sm-6 col-md-4"
      style={{ display: "grid", placeItems: "center" }}
    >
      <Link
        to={`/personaje/${props.id}`}
        style={{ textDecoration: "none", color: "initial" }}
      >
        <div className="card" style={{ height: "100%", maxWidth: "540px" }}>
          <div className="row g-0" style={{ height: "100%" }}>
            <div className="col-md-4">
              <img
                src={props.image}
                style={{ height: "100%", objectFit: "cover" }}
                className="img-fluid rounded-start"
                alt={props.name}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title mb-0">{props.name} </h4>
                <p>
                  <span className="EstiloCiruclo"></span>
                  {props.status} {props.species}
                </p>

                <p className="mb-0 text-muted">Last kanow</p>
                <p>{props.location ? props.location.name : ""}</p>
                <p className="mb-0 text-muted"> Origin</p>
                <p>{props.origin ? props.origin.name : ""}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

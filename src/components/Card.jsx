import "../styles/Card.css";
import Logements from "../logements.json";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="card-all">
      {Logements.map((logement) => {
        return (
          <Link
            to={`/logement/${logement.id}`}
            key={logement.id}
            className="card-card"
          >
            <img
              src={logement.cover}
              alt={logement.title}
              className="card-image"
            />
            <h3 className="card-title">{logement.title}</h3>
          </Link>
        );
      })}
    </div>
  );
}

export default Card;

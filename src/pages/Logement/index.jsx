import Logements from "../../logements.json";
import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../../components/Slideshow";
import InfosLogement from "../../components/InfosLogement";
import Collapse from "../../components/Collapse";

function monLogement(Logements, logementId) {
  return Logements.find((logement) => logement.id === logementId);
}

function Logement() {
  let { logementId } = useParams();
  const leLogementchoisi = monLogement(Logements, logementId);

  if (!leLogementchoisi) {
    return <Navigate replace to="/page-non-trouvee" />;
  }

  return (
    <main className="main">
      <Slideshow photos={leLogementchoisi.pictures} />
      <InfosLogement
        title={leLogementchoisi.title}
        location={leLogementchoisi.location}
        tags={leLogementchoisi.tags}
        name={leLogementchoisi.host.name}
        picture={leLogementchoisi.host.picture}
        rating={leLogementchoisi.rating}
        id={leLogementchoisi.id}
      />
      <div className="main-collapses-logement">
        <div className="main-collapse-logement">
          <Collapse
            description={leLogementchoisi.description}
            title={"Description"}
          />
        </div>

        <div className="main-collapse-logement">
          <Collapse
            title={"Equipements"}
            description={leLogementchoisi.equipments.map(
              (equipement, index) => (
                <div key={`${leLogementchoisi.equipments}-${index}`}>
                  {equipement}
                </div>
              )
            )}
          />
        </div>
      </div>
    </main>
  );
}

export default Logement;

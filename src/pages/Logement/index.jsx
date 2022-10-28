import Logements from '../../logements.json'
import { useParams } from 'react-router-dom'
import CollapseLogement from '../../components/CollapseLogement';
import Slideshow from '../../components/Slideshow';
import InfosLogement from '../../components/InfosLogement';

function monLogement (Logements, logementId) {
    for (let logement of Logements) {
        if (logement.id===logementId) {     
            return logement
        }
    }
}
  
function Logement(){
    let {logementId} = useParams();
    const leLogementchoisi = monLogement(Logements, logementId);

    return(
        <main className='main'>
                    <Slideshow photo={leLogementchoisi.cover} />
                    <InfosLogement title={leLogementchoisi.title} location={leLogementchoisi.location} tags={leLogementchoisi.tags} 
                        name={leLogementchoisi.host.name} picture={leLogementchoisi.host.picture}/>
                    <div className='main-collapses'>
                        <CollapseLogement text={leLogementchoisi.description} titre={'Description'}/>
                        <CollapseLogement text={leLogementchoisi.equipements} titre={'Equipements'}/>
                    </div>   
        </main>
                    
    )
}

export default Logement

/*
<div className="main-description">
                                ...
                            </div> 
                            <div className="main-equipements">
                                ...
                            </div>
*/
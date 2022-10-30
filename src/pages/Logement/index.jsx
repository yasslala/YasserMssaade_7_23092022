import Logements from '../../logements.json'
import { useParams } from 'react-router-dom'
//import CollapseLogement from '../../components/CollapseLogement';
import Slideshow from '../../components/Slideshow';
import InfosLogement from '../../components/InfosLogement';
import Collapse from '../../components/Collapse';

function monLogement (Logements, logementId) {
    return Logements.find(logement => logement.id === logementId)
}
  
function Logement(){
    let {logementId} = useParams();
    const leLogementchoisi = monLogement(Logements, logementId);

    return(
        <main className='main'>
                    <Slideshow photos={leLogementchoisi.pictures} />
                    <InfosLogement 
                        title={leLogementchoisi.title} 
                        location={leLogementchoisi.location} 
                        tags={leLogementchoisi.tags} 
                        name={leLogementchoisi.host.name} 
                        picture={leLogementchoisi.host.picture}/>
                    <div className='main-collapses'>
                        <Collapse description={leLogementchoisi.description} title={'Description'}/>            
                        <Collapse title={'Equipements'}
                            description={leLogementchoisi.equipments.map((equipement) => (
                            <div>{equipement}</div>
                        ))}/>
                        
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

                            for (let logement of Logements) {
        if (logement.id===logementId) {     
            return logement
        }
    }




        
                                {leLogementchoisi.equipments.map((data, index) =>(
                                    <p>{data[index]}</p>
                                ))}
                            
                        </Collapse> 
*/
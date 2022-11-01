import Logements from '../../logements.json'
import { useParams, Navigate } from 'react-router-dom'
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
       <> { leLogementchoisi ? (

        <main className='main'>
                    <Slideshow photos={leLogementchoisi.pictures} />
                    <InfosLogement 
                        title={leLogementchoisi.title} 
                        location={leLogementchoisi.location} 
                        tags={leLogementchoisi.tags} 
                        name={leLogementchoisi.host.name} 
                        picture={leLogementchoisi.host.picture}
                        rating={leLogementchoisi.rating}/>
                    <div className='main-collapses-logement'>  

                        <div className='main-collapse-logement'>
                            <Collapse description={leLogementchoisi.description} title={'Description'}/>
                        </div> 
                         
                        <div className='main-collapse-logement'>
                            <Collapse title={'Equipements'}
                                description={leLogementchoisi.equipments.map((equipement) => (
                                    <div>{equipement}</div>
                                ))}/>  
                        </div>                                               
                    </div>  
        </main>

        ) : (<Navigate replace to='*'/>)
        }  </>            
    )
}

export default Logement


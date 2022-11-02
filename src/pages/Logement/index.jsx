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
                    <Slideshow 
                        key={leLogementchoisi.pictures}
                        photos={leLogementchoisi.pictures} />
                    <InfosLogement
                        key={leLogementchoisi.title}
                        title={leLogementchoisi.title} 
                        location={leLogementchoisi.location} 
                        tags={leLogementchoisi.tags} 
                        name={leLogementchoisi.host.name} 
                        picture={leLogementchoisi.host.picture}
                        rating={leLogementchoisi.rating}
                        id={leLogementchoisi.id}/>
                    <div className='main-collapses-logement'>  

                        <div className='main-collapse-logement'>
                            <Collapse 
                                key={leLogementchoisi.description}
                                description={leLogementchoisi.description}
                                title={'Description'}/>
                        </div> 
                         
                        <div className='main-collapse-logement'>
                            <Collapse
                                key={leLogementchoisi.equipments}
                                title={'Equipements'}
                                description={leLogementchoisi.equipments.map((equipement, index) => (
                                <div key={`${leLogementchoisi.equipments}-${index}`}>{equipement}</div>
                                ))}/>  
                        </div>                                               
                    </div>  
        </main>

        ) : (<Navigate replace to='*'/>)
        }  </>            
    )
}

export default Logement



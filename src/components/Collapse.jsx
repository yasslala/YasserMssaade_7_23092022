import '../styles/Collapse.css'
import { useState } from 'react'

function Collapse({title, description}) {

    const [active, setActive] = useState(false)

    const activeFalse = () => {
        setActive(!active)
    }

    return(
        <div className='collapse'>
            <div className='collapse-withicon'>
                <h3 className='collapse-title'>{title}</h3>
                <div onClick={activeFalse} className='collapse-icon'>{active ? '-' : '+'}</div>
            </div>
            <div className='collapse-card'>
                { active && <div className='collapse-background'>
                     <p className='collapse-descrption'>{description}</p>
                 </div>
                }
            </div>
            
        </div>
    )
}

export default Collapse

/*
{active ?
                    (<div onClick={activeFalse} className='collapse-icon'>+</div>)
                    :
                    (<div onClick={activeTrue} className='collapse-icon'>-</div>)
                }


                {activeTrue ? (<div></div>)
                     : (<div className='collapse-background'>
                     <p className='collapse-descrption'>{description}</p>
                 </div>)
                }
                */
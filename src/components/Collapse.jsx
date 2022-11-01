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
                <div onClick={activeFalse} className='collapse-icon'>{active ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</div>
            </div>
            { active && <div className='collapse-background'>
                     <p className='collapse-descrption'>{description}</p>
            </div>
            }
                
            
        </div>
    )
}

export default Collapse


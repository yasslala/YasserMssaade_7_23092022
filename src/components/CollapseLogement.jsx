/*import '../styles/CollapseLogement.css'
import { useState } from 'react'

function CollapseLogement({text, titre}) {

    const [active, setActive] = useState(false)

    const activeFalse = () => {
        setActive(!active)
    }

    return(
        <div className='collapselogement'>
            <div className='collapselogement-withicon'>
                <h3 className='collapselogement-title'>{titre}</h3>
                <div onClick={activeFalse} className='collapselogement-icon'>{active ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</div>
            </div>
            <div className='collapselogement-card'>
                { active && <div className='collapselogement-background'>
                                <div className='collapselogement-description'>{text}</div>
                            </div>
                }
            </div>
            
        </div>
    )
}

export default CollapseLogement*/
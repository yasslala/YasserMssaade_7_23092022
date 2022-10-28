import '../styles/Slideshow.css'

function Slideshow({photo}) {

    return(
        <div className='slideshow-content'>
            <img src={photo} alt="" className='slideshow-photo' />
        </div>
    )
}

export default Slideshow


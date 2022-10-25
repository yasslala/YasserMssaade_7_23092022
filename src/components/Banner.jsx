import '../styles/Banner.css'

function Banner({picture, text}) {
    return(
        <div className='banner-contenant'>
            <img src={picture} alt='bannière' className='banner-image'/>
            <p className="banner-text" >{text}</p>
        </div>
    )
}
export default Banner
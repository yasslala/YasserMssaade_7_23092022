import '../styles/InfosLogement.css'

function InfosLogement({title, location, tags, name, picture}) {

    return(
        <div className="main-informations">
            <div className="main-localisation">
                <h2 className="main-title">
                    {title}
                </h2>
                <p className="main-city">{location}</p>
                <div className="main-tags">
                    {tags.map((tag) => {
                        return<div className="main-tag">
                        {tag}
                    </div>
                    })}
                </div>
            </div>
            <div className="main-commentaires">
                <div className="main-profil">
                    <h3 className="main-name">
                        {name}
                    </h3>
                    <img src={picture} alt='' className="main-photo"/>
                </div>
                <div className="main-stars">
                    <i className="fa-solid fa-star" ></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
            </div>
        </div>
    )
}

export default InfosLogement
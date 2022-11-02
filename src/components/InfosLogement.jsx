import '../styles/InfosLogement.css'

function InfosLogement({title, location, tags, name, picture, rating, id}) {
    const ratingMax = 5;
    const coloredStars = rating;
    const uncoloredStars = ratingMax - coloredStars
    let starsArray = []

    for(let i=0; i<coloredStars; i++){
        starsArray.push(<i className="fa-solid fa-star" style={{color: '#FF6060'}}></i>)
    }
    for(let i=0; i<uncoloredStars; i++){
        starsArray.push(<i className="fa-solid fa-star" style={{color: 'gainsboro'}}></i>)
    }

    return(
        <div className="main-informations">
            <div className="main-localisation">
                <h2 className="main-title">
                    {title}
                </h2>
                <p className="main-city">{location}</p>
                <div className="main-tags">
                    {tags.map((tag) => {
                        return<div key={`${tag}-${id}`} className="main-tag">
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
                    {starsArray}
                </div>
            </div>
        </div>
    )
}

export default InfosLogement

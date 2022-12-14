import "../styles/Slideshow.css";
import { useState } from "react";

function Slideshow({ photos }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index === photos.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prev = () => {
    if (index === 0) {
      setIndex(photos.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const allPhotos = photos.length;

  return (
    <div className="slideshow-content">
      
        <img src={photos[index]} alt="" className="slideshow-photo" />
        {allPhotos > 1 && (
          <div className="slideshow-angles">
            <i onClick={prev} className="fa-solid fa-angle-left"></i>
            <i onClick={next} className="fa-solid fa-angle-right"></i>
          </div>
        )}
      
    </div>
  );
}

export default Slideshow;

/*<div className="slideshow-photoo"></div>
</div>*/
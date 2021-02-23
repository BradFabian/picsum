import React, {useState, useContext} from "react"
import {Context} from "../Context"
function Image({className, img}){

    const [hover, setHover] = useState(false);
    const {toggleFavorite} = useContext(Context);
    const heartIcon = hover && <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    const cartIcon = hover && <i className="ri-add-circle-line cart"></i>



    return (
        <div className={`${className} image-container`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
            <img src={img.url} alt={img.url} className="image-grid"/>
            {
               heartIcon
            }
            {cartIcon}
        </div>
    )
}

export default Image
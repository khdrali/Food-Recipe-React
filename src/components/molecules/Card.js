import React from 'react'
import { Link } from 'react-router-dom'

function Card(props){
    const {image, name, url}=props
    return(
        <div class="click-image">
                       <Link to={`/detail-recipe/${url}`}>
                            <img src={image||"../image/index/popular recipe/Popular recipe-1.jpg"} height="100%"width='100%' alt='background'/>
                        </Link>
                        <h2 class="image-title">{name||"Unknown"}</h2>
                    </div>
    )
}
export default Card
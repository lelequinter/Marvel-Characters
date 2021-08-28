import React from 'react'
import './cards.css'

function card({characters}) {
    return (
        
        <div className="card bg-dark">
            <img src={characters.thumbnail.path+"."+characters.thumbnail.extension} alt="" className="img-responsive"></img>
            <div className="text-block center">
                <h4 className="card-title">{characters.name}</h4>
            </div>
        </div>
        
    )
}

export default card

//<p className="card-text text-light">{des}</p>

//<div className="card text-center bg-dark "> 
//<img src={imageURL} width="50%" className="center"></img>
//<div className="card-body text-light">
//    <h4 className="card-title">{title}</h4>
//    <p className="card-text text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//    <a href="#" className="btn btn-outline-secondary text-light">
//        Details
//    </a>
//</div>
//</div>
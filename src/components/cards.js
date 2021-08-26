import React, {useEffect} from 'react'
import Card from './card'
import imagen1 from '../assets/lele.jpg'


//areglo que debo tomar de la API
const Cards = [
    {
        id: 1,
        title: 'Blog',
        image: imagen1
    },
    {
        id: 2,
        title: 'Perfil',
        image: imagen1
    },
    {
        id: 3,
        title: 'Redes Sociales',
        image: imagen1
    }
]



function cards(props) {

    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    Cards.map(card => (
                    <div className="col-md-4" key={card.id}>  
                    <Card title={card.title} imageURL={card.image} />
                    </div>))
                }
            </div>
        </div>
    )
}

cards.propTypes = {

}

export default cards


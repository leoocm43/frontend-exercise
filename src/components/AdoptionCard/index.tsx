import React from 'react'
import {DogImage, Title} from './AdoptionCardElements'

const AdoptionCard = (props: { title: any; img: any}) => {
    return (
        <div style={{ margin: "auto", marginBottom:"20px" ,width: "49%", border: " solid 5px #000000"}}>
            <DogImage src= {props.img} alt="Dog img"/>
            <Title>{props.title}</Title>
        </div>
    )
}

export default AdoptionCard;
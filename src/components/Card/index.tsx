import React from 'react'
import { DogImage,AdoptionButton, Title } from './CardElements';

const Card = (props: { title: any; img: any; id: any; }) => {
    return (
        <div style={{ margin: "auto", marginBottom:"20px", width: "49%", border: " solid 5px #000000"}}>
            <DogImage src= {props.img} alt="Dog img"></DogImage>
            <Title>{props.title}</Title>
            <AdoptionButton onClick={() => console.log(props.id)}>Adopt</AdoptionButton>
        </div>
    )
}

export default Card

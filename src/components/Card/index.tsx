import React from 'react'
import {Title} from './CardElements';

const Card = (props: { title: any; img: any;}) => {
    return (
        <div style={{ margin: "auto", marginBottom:"20px" ,width: "49%", border: " solid 5px #000000"}}>
            <img width="100% " height="250px " src= {props.img} alt="Dog img"></img>
            <h5>{props.title}</h5>
            <div onClick={() => console.log(props.title)} style={{border: "solid 1px #dda7a7", margin:"10px"}}>
                Adopt Button
            </div>
        </div>
    )
}

export default Card

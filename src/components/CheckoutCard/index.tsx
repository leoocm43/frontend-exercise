import React from 'react'
import { Row, Column } from '../grid/GridElements'
import {DogImage, RemoveButton, Title} from './CheckoutCardelements'

const CheckoutCard = (props: { title: any; img: any; id: any; }) => {
    return (
        <div style={{ margin: "auto", marginBottom:"20px" , width: "49%", border:"solid 1px #596275", borderRadius: "5px"}}>
            <Row>
                <Column xs="12" sm="12" md="12" lg="4">
                    <DogImage src={props.img} alt="Dog img"></DogImage>
                </Column>
                <Column xs="12" sm="12" md="12" lg="4">
                    <Title>{props.title}</Title>
                </Column>
                <div style={{cursor: "pointer"}}>
                    <Column xs="12" sm="12" md="12" lg="4">
                        <RemoveButton>Remove from basket</RemoveButton>
                    </Column>  
                </div>
            </Row>
        </div>
    )
}

export default CheckoutCard

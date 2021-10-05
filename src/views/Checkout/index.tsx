import React from 'react'
import CheckoutCard from '../../components/CheckoutCard'
import {Row, Column} from '../../components/grid/GridElements'
import {useDogs} from '../../core/utils/hooks/useDogs'

const Checkout = () => {

    const {dogsData, dogsIsLoading} = useDogs()
    return (

        <>
        <br></br>
        <h3 style={{marginLeft:"535px"}}>Your new friends</h3>
            {dogsIsLoading &&
                "Loading..."
            }
            <Row>
                {
                    dogsData  ? 
                        dogsData.map((dog: { first_name: any; avatar: any ; id: any}) => (
                            <>
                                
                                <Column xs="12" sm="12" md="12" lg="12">
                                    <CheckoutCard title={dog.first_name} img={dog.avatar} id={dog.id}/>
                                </Column>
                                
                            </>
                        ))
                        : "No dogs"
                }
            </Row>
            
        </>
    )
}

export default Checkout

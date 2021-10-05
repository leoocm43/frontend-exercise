import React from 'react'
import AdoptionCard from '../../components/AdoptionCard'
import {Row, Column} from '../../components/grid/GridElements'
import {useDogs} from '../../core/utils/hooks/useDogs'

const Dogs = () => {

    const {dogsData, dogsIsLoading} = useDogs()
    return (

        <>
        <br></br>
        <h3 style={{marginLeft:"170px"}}>Your companions</h3>
            <Row>
            
            {   
             dogsIsLoading &&
                "Loading..."
            }
                {
                    dogsData  ? 
                        dogsData.map((dog: { title: any; url: any ;id: any}) => (

                            <>
                                
                                <Column xs="12" sm="12" md="6" lg="4">
                                    <AdoptionCard title={dog.title} img={dog.url}/>
                                </Column>
                                
                            </>
                        ))
                        : "No dogs"
                }
            </Row>
        </>
    )
}

export default Dogs

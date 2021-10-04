import React from 'react'
import Card from '../../components/Card'
import {Row, Column} from '../../components/grid/GridElements'
import {useDogs} from '../../core/utils/hooks/useDogs'

const Dogs = () => {

    const {dogsData, dogsIsLoading} = useDogs()
    return (

        <>
        <br></br>
            <Row>
                {
                    dogsData  ? 
                        dogsData.map((dog: { first_name: any; avatar: any }) => (
                            <>
                                
                                <Column xs="12" sm="12" md="6" lg="4">
                                    <Card title={dog.first_name} img={dog.avatar}/>
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

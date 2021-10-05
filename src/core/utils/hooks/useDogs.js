import { useEffect, useState } from 'react'
import * as DogService from "../../../core/services/dogs"


export const useDogs = () => {

    const [dogsIsLoading, setDogsIsLoading] = useState(false)
    const [dogsData, setDogsData] = useState([])
    
    async function fetchDogs() {

        setDogsIsLoading(true)

        try {
            
            const result = await DogService.getDogs()

            switch (result.code) {
                case 200:
                    setDogsData(result?.data.data)
                    console.log("Dogs", result?.data)
                    break
                case 404:
                    setDogsData([])
                    break
                default:
                    throw 500
            }

        } catch (error) {
            
            console.log("Dog Error")

        } finally {
            setDogsIsLoading(false)
        }
    }


    

    useEffect(() => {

        fetchDogs()

    }, [])

    return {
        dogsIsLoading,
        dogsData,
    }
}
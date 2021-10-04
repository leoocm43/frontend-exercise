import { Endpoints } from "../utils/Endpoints"
import { httpClient } from "../utils/httpClient"

export const getDogs = async () => {

    const result = await httpClient(
        Endpoints.test,
        {
            method: 'GET',
        }
    )
    return result
}
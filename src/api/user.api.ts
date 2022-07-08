import axios from "axios";

export const getUser =async (id=1) => {
    const response = await axios(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method:'GET',
    })
    return response.data
}

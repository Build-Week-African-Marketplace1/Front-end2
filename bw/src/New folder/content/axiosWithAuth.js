import axios from 'axios'


export const axiosWithAuth = () => {
    return axios.create({
        baseURL:'https://african-marketplace-bw-1.herokuapp.com/api/auth/',
        headers: {
            authorization: localStorage.getItem('token')
        }

    })
}
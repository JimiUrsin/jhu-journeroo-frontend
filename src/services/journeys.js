import axios from 'axios'
const baseUrl = process.env.REACT_APP_BACKEND_URL

const getAll = () => {
    console.log(`Sending GET request to ${baseUrl}/api/journeys/`)
    return axios.get(`${baseUrl}/api/journeys/`)
}

export default { getAll };

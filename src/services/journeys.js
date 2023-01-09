import axios from 'axios'
const baseUrl = process.env.REACT_APP_BACKEND_URL

const getAll = () => {
    console.log(`Sending GET request to ${baseUrl}/api/journeys/`)
    return axios.get(`${baseUrl}/api/journeys/`)
}

const getPage = (page) => {
    console.log(`Sending GET request to ${baseUrl}/api/journeys/${page}`)
    return axios.get(`${baseUrl}/api/journeys/${page}`)
}

export default { getAll, getPage };

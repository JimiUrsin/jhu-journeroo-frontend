import axios from 'axios'
const baseUrl = process.env.REACT_APP_BACKEND_URL

const getAll = (sort, column) => {
    return axios.get(`${baseUrl}/api/journeys/`, {params: {sort: sort, column: column}})
}

const getPage = (page, sort, column) => {
    return axios.get(`${baseUrl}/api/journeys/${page}`, {params: {sort: sort, column: column}})
}

export default { getAll, getPage };

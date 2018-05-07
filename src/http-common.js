import axios from 'axios'

export const AXIOS = axios.create({
  baseURL: `http://localhost:8888`,
  headers: {
    'Content-Type': 'application/json'
  }
})

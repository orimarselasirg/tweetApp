import axios from 'axios'

const dummyapi = axios.create({
  baseURL: 'https://dummyapi.io/data/v1',
  headers: {'app-id':'6515ac07e1045f3c0aa65acb' }
})

export {dummyapi}
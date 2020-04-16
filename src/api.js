import axios from 'axios'

const BASE_URL = 'https://api.github.com'

var axiosInstance = axios.create({
  baseURL: BASE_URL,
})

export const getUsers = async (query) => {
return await axiosInstance.get(`/search/users?q=${query}&per_page=5`)
}

export const getUserRepositories = async (login) => {
  return await axiosInstance.get(`/users/${login}/repos`)
}


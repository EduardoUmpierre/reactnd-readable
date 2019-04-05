import axios from 'axios'

const API_URL = 'http://localhost:3001'
const HEADERS = {
  headers: { Authorization: '123456' },
}

const get = endpoint =>
  axios.get(`${API_URL}/${endpoint}`, HEADERS).then(result => result.data)

const post = (endpoint, data) =>
  axios
    .post(`${API_URL}/${endpoint}`, data, HEADERS)
    .then(result => result.data)

const getCategories = get('categories')
const getPosts = get('posts')

export const getInitialData = () =>
  Promise.all([getCategories, getPosts]).then(([categories, posts]) => ({
    categories: categories.categories,
    posts,
  }))

export const setVotePost = (data) => post(`posts/${data.id}`, { option: data.vote })

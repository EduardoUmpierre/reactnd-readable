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

const put = (endpoint, data) =>
  axios.put(`${API_URL}/${endpoint}`, data, HEADERS).then(result => result.data)

const remove = endpoint =>
  axios.delete(`${API_URL}/${endpoint}`, HEADERS).then(result => result.data)

// Initial data
const getCategories = get('categories')
const getPosts = get('posts')

export const getInitialData = () =>
  Promise.all([getCategories, getPosts]).then(([categories, posts]) => ({
    categories: categories.categories,
    posts,
  }))

// Post
export const savePost = data => post('posts', data)
export const getPost = id => get(`posts/${id}`)
export const getPostComments = id => get(`posts/${id}/comments`)
export const setVotePost = data =>
  post(`posts/${data.id}`, { option: data.vote })
export const updatePostData = (id, data) => put(`posts/${id}`, data)
export const deletePost = id => remove(`posts/${id}`)

// Comment
export const setVoteComment = data =>
  post(`comments/${data.id}`, { option: data.vote })

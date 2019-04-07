import { showLoading, hideLoading } from 'react-redux-loading'
import { setVotePost, getPost, savePost, updatePostData } from '../utils/api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const ADD_SCORE_POST = 'ADD_SCORE_POST'
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  }
}

function addScorePost({ id, vote }) {
  return {
    type: ADD_SCORE_POST,
    id,
    vote,
  }
}

export function handleAddScorePost(data) {
  return dispatch => {
    dispatch(addScorePost(data))

    return setVotePost(data).catch(error => console.log(error))
  }
}

function receivePost(post) {
  return {
    type: RECEIVE_POST,
    post,
  }
}

export function handleReceivePost(id) {
  return dispatch => {
    dispatch(showLoading())

    return getPost(id)
      .then(post => dispatch(receivePost(post)))
      .then(() => dispatch(hideLoading()))
      .catch(error => console.log(error))
  }
}

function addPost(post) {
  return {
    type: ADD_POST,
    post,
  }
}

export function handleAddPost(data) {
  return dispatch => {
    dispatch(showLoading())

    return savePost(data)
      .then(() => dispatch(addPost(data)))
      .then(() => dispatch(hideLoading()))
      .catch(error => console.log(error))
  }
}

function updatePost(id, post) {
  return {
    type: UPDATE_POST,
    id,
    post,
  }
}

export function handleUpdatePost(id, data) {
  return dispatch => {
    dispatch(showLoading())

    return updatePostData(id, data)
      .then(() => dispatch(updatePost(id, data)))
      .then(() => dispatch(hideLoading()))
      .catch(error => console.log(error))
  }
}

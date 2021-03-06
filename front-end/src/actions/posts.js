import { showLoading, hideLoading } from 'react-redux-loading'
import {
  setVotePost,
  getPost,
  savePost,
  updatePostData,
  deletePost,
} from '../utils/api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const ADD_SCORE_POST = 'ADD_SCORE_POST'
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const UPDATE_COMMENT_COUNT = 'UPDATE_COMMENT_COUNT'

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

function updateCommentCount({ id, action }) {
  return {
    type: UPDATE_COMMENT_COUNT,
    id,
    action,
  }
}

export function handleUpdateCommentCount(data) {
  return dispatch => {
    return dispatch(updateCommentCount(data))
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

function removePost(id) {
  return {
    type: REMOVE_POST,
    id,
  }
}

export function handleRemovePost(id) {
  return dispatch => {
    dispatch(removePost(id))

    return deletePost(id).catch(error => console.log(error))
  }
}

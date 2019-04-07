import { showLoading, hideLoading } from 'react-redux-loading'
import {
  getPostComments,
  setVoteComment,
  getComment,
  saveComment,
  updateCommentData,
  deleteComment,
} from '../utils/api'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_SCORE_COMMENT = 'ADD_SCORE_COMMENT'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments,
  }
}

export function handleReceiveComments(id) {
  return dispatch => {
    dispatch(showLoading())
    return getPostComments(id)
      .then(comments => dispatch(receiveComments(comments)))
      .then(() => dispatch(hideLoading()))
  }
}

function addScoreComment({ id, vote }) {
  return {
    type: ADD_SCORE_COMMENT,
    id,
    vote,
  }
}

export function handleAddScoreComment(data) {
  return dispatch => {
    dispatch(addScoreComment(data))

    return setVoteComment(data).catch(error => console.log(error))
  }
}

function receiveComment(comment) {
  return {
    type: RECEIVE_COMMENT,
    comment,
  }
}

export function handleReceiveComment(id) {
  return dispatch => {
    dispatch(showLoading())

    return getComment(id)
      .then(comment => dispatch(receiveComment(comment)))
      .then(() => dispatch(hideLoading()))
      .catch(error => console.log(error))
  }
}

function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment,
  }
}

export function handleAddComment(data) {
  return dispatch => {
    dispatch(showLoading())

    return saveComment(data)
      .then(() => dispatch(addComment(data)))
      .then(() => dispatch(hideLoading()))
      .catch(error => console.log(error))
  }
}

function updateComment(id, comment) {
  return {
    type: UPDATE_COMMENT,
    id,
    comment,
  }
}

export function handleUpdateComment(id, data) {
  return dispatch => {
    dispatch(showLoading())

    return updateCommentData(id, data)
      .then(() => dispatch(updateComment(id, data)))
      .then(() => dispatch(hideLoading()))
      .catch(error => console.log(error))
  }
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id,
  }
}

export function handleRemoveComment(id) {
  return dispatch => {
    dispatch(removeComment(id))

    return deleteComment(id).catch(error => console.log(error))
  }
}

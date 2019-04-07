import { showLoading, hideLoading } from 'react-redux-loading'
import { getPostComments, setVoteComment } from '../utils/api'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_SCORE_COMMENT = 'ADD_SCORE_COMMENT'

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

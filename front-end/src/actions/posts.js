import { setVotePost } from '../utils/api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_SCORE_POST = 'ADD_SCORE_POST'

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

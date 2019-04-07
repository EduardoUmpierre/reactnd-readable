import {
  RECEIVE_POSTS,
  ADD_SCORE_POST,
  RECEIVE_POST,
  ADD_POST,
  UPDATE_POST,
  REMOVE_POST,
} from '../actions/posts'

export default function posts(state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return [...state, ...action.posts]
    case RECEIVE_POST:
      return state.some(post => post.id === action.post.id)
        ? state
        : [...state].concat(action.post)
    case ADD_SCORE_POST:
      return state.map(post => {
        if (post.id !== action.id) return post

        let voteScore = post.voteScore
        voteScore += action.vote === 'upVote' ? 1 : -1

        return { ...post, voteScore }
      })
    case ADD_POST:
      return [
        ...state,
        { ...action.post, commentCount: 0, voteScore: 1, deleted: false },
      ]
    case UPDATE_POST:
      return state.map(post => {
        if (post.id !== action.id) return post

        return { ...post, ...action.post }
      })
    case REMOVE_POST:
      return state.filter(post => post.id !== action.id)
    default:
      return state
  }
}

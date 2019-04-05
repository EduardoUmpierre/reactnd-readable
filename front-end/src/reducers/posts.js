import { RECEIVE_POSTS, ADD_SCORE_POST } from '../actions/posts'

export default function posts(state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return [...state, ...action.posts]
    case ADD_SCORE_POST:
      return state.map(post => {
        if (post.id !== action.id) return post

        let voteScore = post.voteScore
        voteScore += action.vote === 'upVote' ? 1 : -1

        return { ...post, voteScore }
      })
    default:
      return state
  }
}

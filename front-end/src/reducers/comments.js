import { RECEIVE_COMMENTS, ADD_SCORE_COMMENT } from '../actions/comments'

export default function comments(state = [], action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return [
        ...state.filter(
          stateComment =>
            !action.comments.some(comment => stateComment.id === comment.id)
        ),
        ...action.comments,
      ]
    case ADD_SCORE_COMMENT:
      return state.map(comment => {
        if (comment.id !== action.id) return comment

        let voteScore = comment.voteScore
        voteScore += action.vote === 'upVote' ? 1 : -1

        return { ...comment, voteScore }
      })
    default:
      return state
  }
}

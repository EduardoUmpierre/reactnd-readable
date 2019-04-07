import {
  RECEIVE_COMMENTS,
  ADD_SCORE_COMMENT,
  RECEIVE_COMMENT,
  ADD_COMMENT,
  UPDATE_COMMENT,
  REMOVE_COMMENT,
} from '../actions/comments'

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
    case RECEIVE_COMMENT:
      return state.some(comment => comment.id === action.comment.id)
        ? state
        : [...state].concat(action.comment)
    case ADD_SCORE_COMMENT:
      return state.map(comment => {
        if (comment.id !== action.id) return comment

        let voteScore = comment.voteScore
        voteScore += action.vote === 'upVote' ? 1 : -1

        return { ...comment, voteScore }
      })
    case ADD_COMMENT:
      return [
        ...state,
        { ...action.comment, commentCount: 0, voteScore: 1, deleted: false },
      ]
    case UPDATE_COMMENT:
      return state.map(comment => {
        if (comment.id !== action.id) return comment

        return { ...comment, ...action.comment }
      })
    case REMOVE_COMMENT:
      return state.filter(comment => comment.id !== action.id)
    default:
      return state
  }
}

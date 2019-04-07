import { showLoading, hideLoading } from 'react-redux-loading'
import { getInitialData } from '../utils/api'
import { receiveCategories } from './categories'
import { receivePosts } from './posts'

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading())

    return getInitialData().then(({ categories, posts }) => {
      dispatch(receiveCategories(categories))
      dispatch(receivePosts(posts))
      dispatch(hideLoading())
    })
  }
}

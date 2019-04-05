import { getInitialData } from '../utils/api'
import { receiveCategories } from './categories'
import { receivePosts } from './posts'

export const handleInitialData = () => dispatch =>
  getInitialData().then(({ categories, posts }) => {
    dispatch(receiveCategories(categories))
    dispatch(receivePosts(posts))
  })

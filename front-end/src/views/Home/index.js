import React from 'react'
import { connect } from 'react-redux'
import PostList from '../../components/PostList'
import CategoryList from '../../components/CategoryList'

const filterByCategory = (category, posts) => {
  if (!category) {
    return posts
  }
  
  return posts.filter(
    post => post.category.toLowerCase() === category.toLowerCase()
  )
}

const Home = ({ category, categories, posts }) => (
  <>
    <CategoryList items={categories} />
    <PostList
      items={filterByCategory(category, posts)}
      filteringBy={category}
    />
  </>
)

const mapStateToProps = ({ categories, posts }, props) => {
  const { category } = props.match.params

  return {
    category,
    categories,
    posts,
  }
}

export default connect(mapStateToProps)(Home)

import React from 'react'
import { connect } from 'react-redux'
import PostList from '../../components/PostList'
import CategoryList from '../../components/CategoryList'

const Home = ({ category, categories, posts }) => (
  <>
    <CategoryList items={categories} />
    <PostList items={posts} filteringBy={category} />
  </>
)

const mapStateToProps = ({ categories, posts }, props) => {
  const { category } = props.match.params

  return {
    category,
    categories,
    posts: !category
      ? posts
      : posts.filter(
          post => post.category.toLowerCase() === category.toLowerCase()
        ),
  }
}

export default connect(mapStateToProps)(Home)

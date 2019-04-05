import React from 'react'
import { connect } from 'react-redux'
import PostList from '../../components/PostList'
import CategoryList from '../../components/CategoryList'

const Home = ({ categories, posts }) => (
  <>
    <CategoryList items={categories} />
    <PostList items={posts} />
  </>
)

const mapStateToProps = ({ categories, posts }) => ({
  categories,
  posts,
})

export default connect(mapStateToProps)(Home)

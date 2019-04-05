import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PostList from '../../components/PostList'
import CategoryList from '../../components/CategoryList'
import { container } from '../../styles/shared'

const Container = styled.div`
  ${container}
`

const Home = ({ categories, posts }) => (
  <Container>
    <CategoryList items={categories} />
    <PostList items={posts} />
  </Container>
)

const mapStateToProps = ({ categories, posts }) => ({
  categories,
  posts,
})

export default connect(mapStateToProps)(Home)

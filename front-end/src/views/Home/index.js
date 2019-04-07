import React, { useState } from 'react'
import { connect } from 'react-redux'
import PostList from '../../components/PostList'
import CategoryList from '../../components/CategoryList'

const orderPosts = (items, order) => {
  switch (order) {
    case '1':
      return items.sort((a, b) => a.voteScore - b.voteScore)
    case '2':
      return items.sort((a, b) => b.voteScore - a.voteScore)
    case '3':
      return items.sort((a, b) => a.timestamp - b.timestamp)
    case '4':
      return items.sort((a, b) => b.timestamp - a.timestamp)
    default:
      return items
  }
}

const Home = ({ category, categories, posts }) => {
  const [order, setOrder] = useState('4')

  return (
    <>
      <CategoryList items={categories} />
      <PostList
        items={orderPosts(posts, order)}
        filteringBy={category}
        order={order}
        onOrderChange={e => setOrder(e.target.value)}
      />
    </>
  )
}

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

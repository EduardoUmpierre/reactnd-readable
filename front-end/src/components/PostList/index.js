import React from 'react'
import { Link } from 'react-router-dom'
import { Container, EmptyMessage } from './styles'
import SectionTitle from '../SectionTitle'
import PostItem from '../PostItem'

const PostList = ({ items, filteringBy }) => (
  <>
    <SectionTitle>
      Posts {filteringBy && `da categoria "${filteringBy}"`}
      <Link to="/post">Novo Post</Link>
    </SectionTitle>
    <Container>
      {items.map(post => (
        <PostItem key={post.id} post={post} />
      ))}

      {items.length === 0 && (
        <EmptyMessage>Nenhum post encontrado</EmptyMessage>
      )}
    </Container>
  </>
)

export default PostList

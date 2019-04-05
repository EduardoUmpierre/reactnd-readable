import React from 'react'
import { Container, EmptyMessage } from './styles'
import SectionTitle from '../SectionTitle'
import PostItem from '../PostItem'

const PostList = ({ items, filteringBy }) => (
  <>
    <SectionTitle>Posts {filteringBy && `- ${filteringBy}`}</SectionTitle>
    <Container>
      {items.map(post => (
        <PostItem key={post.id} post={post} />
      ))}

      {items.length === 0 && <EmptyMessage>Nenhum post encontrado</EmptyMessage>}
    </Container>
  </>
)

export default PostList

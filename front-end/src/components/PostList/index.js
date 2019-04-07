import React from 'react'
import { Link } from 'react-router-dom'
import { Container, EmptyMessage, Label, Select } from './styles'
import SectionTitle from '../SectionTitle'
import PostItem from '../PostItem'

const PostList = ({ items, filteringBy, onOrderChange, order }) => (
  <>
    <SectionTitle>
      Posts {filteringBy && `da categoria "${filteringBy}"`}
      <div>
        <Label>Ordenar por:</Label>
        <Select name="order" onChange={onOrderChange} value={order}>
          <option value="1">Score crescente</option>
          <option value="2">Score decrescente</option>
          <option value="3">Data crescente</option>
          <option value="4">Data decrescente</option>
        </Select>
        <Link to="/post">Novo Post</Link>
      </div>
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

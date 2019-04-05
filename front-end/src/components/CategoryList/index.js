import React from 'react'
import { Container, Item } from './styles'
import SectionTitle from '../SectionTitle'

const CategoryList = ({ items }) => (
  <>
    <SectionTitle>Categorias</SectionTitle>
    <Container>
      {items.map(category => (
        <Item key={category.name} to={`/${category.path}`}>
          {category.name}
        </Item>
      ))}
    </Container>
  </>
)

export default CategoryList

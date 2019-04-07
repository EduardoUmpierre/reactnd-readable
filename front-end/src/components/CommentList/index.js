import React from 'react'
import SectionTitle from '../SectionTitle'
import CommentItem from '../CommentItem'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { EmptyMessage as StyledEmptyMessage } from '../PostList/styles'

const EmptyMessage = styled(StyledEmptyMessage)``

const CommentList = ({ items, postId }) => (
  <>
    <SectionTitle small>
      Comentários
      <Link to={`/post/${postId}/comment`}>Novo Comentário</Link>
    </SectionTitle>
    {items.map(comment => (
      <CommentItem key={comment.id} comment={comment}>
        {comment.body}
      </CommentItem>
    ))}

    {items.length === 0 && (
      <EmptyMessage>Nenhum comentário encontrado</EmptyMessage>
    )}
  </>
)

export default CommentList

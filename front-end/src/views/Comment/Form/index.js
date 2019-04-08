import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import SectionTitle from '../../../components/SectionTitle'
import {
  handleAddComment,
  handleUpdateComment,
} from '../../../actions/comments'
import { getComment } from '../../../utils/api'
import {
  Form,
  Input,
  Label,
  Textarea,
  ButtonContainer,
  Button,
} from '../../Post/Form/styles'
import { handleUpdateCommentCount } from '../../../actions/posts'

class CommentForm extends Component {
  state = {
    author: '',
    body: '',
  }

  componentDidMount() {
    const { comment } = this.props

    if (comment) {
      getComment(comment.id).then(comment =>
        this.setState({
          author: comment.author,
          body: comment.body,
        })
      )
    }
  }

  handleSubmit = e => {
    e.preventDefault()

    const { dispatch, history } = this.props
    const { post, comment } = this.props

    if (!comment) {
      const id =
        Math.random()
          .toString(36)
          .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15)

      const timestamp = Date.now()
      const data = {
        ...this.state,
        id,
        timestamp,
        parentId: post.id,
      }

      dispatch(handleAddComment(data))
      dispatch(handleUpdateCommentCount({ id: post.id, action: 'increment' }))
    } else {
      const { title, body } = this.state
      const data = { title, body }

      dispatch(handleUpdateComment(comment.id, data))
    }

    history.push(`/${post.category}/${post.id}`)
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { author, body } = this.state
    const { comment } = this.props

    return (
      <>
        <SectionTitle>{comment ? 'Editar' : 'Novo'} Comentário</SectionTitle>
        <Form onSubmit={this.handleSubmit}>
          <Label>Autor</Label>
          <Input
            name="author"
            value={author}
            placeholder="Autor"
            onChange={this.handleChange}
            disabled={!!comment}
          />

          <Label>Comentário</Label>
          <Textarea
            name="body"
            value={body}
            placeholder="Conteúdo do comentário"
            onChange={this.handleChange}
          />

          <ButtonContainer>
            <Link to="/">Cancelar</Link>
            <Button>Enviar</Button>
          </ButtonContainer>
        </Form>
      </>
    )
  }
}

const mapStateToProps = ({ posts, comments }, { match }) => {
  const { post_id, comment_id } = match.params
  const post = posts.find(post => post.id === post_id)
  const comment = comments.find(comment => comment.id === comment_id)

  return { post, comment }
}

export default withRouter(connect(mapStateToProps)(CommentForm))

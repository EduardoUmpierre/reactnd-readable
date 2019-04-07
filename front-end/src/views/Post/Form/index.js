import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import SectionTitle from '../../../components/SectionTitle'
import { handleAddPost, handleUpdatePost } from '../../../actions/posts'
import { getPost } from '../../../utils/api'
import {
  Form,
  Input,
  Label,
  Select,
  Textarea,
  ButtonContainer,
  Button,
} from './styles'

class PostForm extends Component {
  state = {
    author: '',
    title: '',
    body: '',
    category: 'react',
  }

  componentDidMount() {
    const { id } = this.props

    if (id) {
      getPost(id).then(post =>
        this.setState({
          author: post.author,
          title: post.title,
          body: post.body,
          category: post.category,
        })
      )
    }
  }

  handleSubmit = e => {
    e.preventDefault()

    const { dispatch, history } = this.props
    let { id } = this.props

    if (!id) {
      id =
        Math.random()
          .toString(36)
          .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15)

      const timestamp = Date.now()
      const data = { ...this.state, id, timestamp }

      dispatch(handleAddPost(data))

      history.push('/')
      return
    }

    const { title, body } = this.state
    const data = { title, body }

    dispatch(handleUpdatePost(id, data))

    history.push(`/${data.category}/${id}`)
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { author, title, body, category } = this.state
    const { categories, id } = this.props

    return (
      <>
        <SectionTitle>{id ? 'Editar' : 'Novo'} Post</SectionTitle>
        <Form onSubmit={this.handleSubmit}>
          <Label>Autor</Label>
          <Input
            name="author"
            value={author}
            placeholder="Autor"
            onChange={this.handleChange}
            disabled={!!id}
          />

          <Label>Categoria</Label>
          <Select
            name="category"
            onChange={this.handleChange}
            value={category}
            disabled={!!id}
          >
            {categories.map(cat => (
              <option key={cat.path} id={cat.path}>
                {cat.name}
              </option>
            ))}
          </Select>

          <Label>Título</Label>
          <Input
            name="title"
            value={title}
            placeholder="Título"
            onChange={this.handleChange}
          />

          <Label>Post</Label>
          <Textarea
            name="body"
            value={body}
            placeholder="Conteúdo do post"
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

const mapStateToProps = ({ categories }, { match }) => {
  const id = match.params.post_id

  return {
    id,
    categories: categories,
  }
}

export default withRouter(connect(mapStateToProps)(PostForm))

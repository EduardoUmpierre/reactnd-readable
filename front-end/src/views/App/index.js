import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import { handleInitialData } from '../../actions/shared'
import Home from '../Home'
import { container } from '../../styles/shared'
import PostDetail from '../Post/Detail'

const Container = styled.div`
  ${container}
`

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Container>
          <Route path="/" exact component={Home} />
          <Route path="/:category" exact component={Home} />
          <Route path="/:category/:post_id" component={PostDetail} />
        </Container>
      </Router>
    )
  }
}

export default connect()(App)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import { handleInitialData } from '../../actions/shared'
import Home from '../Home'
import { container } from '../../styles/shared'

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
        </Container>
      </Router>
    )
  }
}

export default connect()(App)

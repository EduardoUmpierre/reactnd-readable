import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom'
import styled from 'styled-components'
import { LoadingBar } from 'react-redux-loading'
import { handleInitialData } from '../../actions/shared'
import Home from '../Home'
import { container } from '../../styles/shared'
import PostDetail from '../Post/Detail'
import PostForm from '../Post/Form'
import CommentForm from '../Comment/Form'
import NotFound from '../NotFound';

const Container = styled.div`
  ${container}
`

const NavContainer = styled.div`
  margin-bottom: 2rem;

  a {
    color: #333;
  }
`

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <>
          <LoadingBar showFastActions />
          <Container>
            <NavContainer>
              <NavLink to="/">Home</NavLink>
            </NavContainer>

            {!this.props.loading && (
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/404" component={NotFound} />
                <Route path="/post" exact component={PostForm} />
                <Route path="/post/:post_id" exact component={PostForm} />
                <Route
                  path="/post/:post_id/comment"
                  exact
                  component={CommentForm}
                />
                <Route
                  path="/post/:post_id/comment/:comment_id"
                  exact
                  component={CommentForm}
                />
                <Route path="/:category" exact component={Home} />
                <Route
                  path="/:category/:post_id"
                  exact
                  component={PostDetail}
                />
                <Route component={NotFound} />
              </Switch>
            )}
          </Container>
        </>
      </Router>
    )
  }
}

function mapStateToProps({ posts }) {
  return {
    loading: !posts,
  }
}

export default connect(mapStateToProps)(App)

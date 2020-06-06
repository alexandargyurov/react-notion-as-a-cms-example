import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Blogs from './pages/Blogs'
import BlogPost from './pages/BlogPost'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Blogs} />
          <Route exact path="/blog/:blogTitle" component={BlogPost} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
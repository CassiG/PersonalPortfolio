import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AllBlog from './AllBlog';
import BlogPost from './BlogPost'

class BlogRoute extends Component {
  render(){
    return(
      <Switch>
        <Route exact path='/blog' component={AllBlog} />
        <Route exact path='/blog/:path' component={BlogPost} />
      </Switch>
    )
  }
}

export default BlogRoute;
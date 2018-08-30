import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AllBlog from './AllBlog';
import BlogItem from './BlogItem';

class BlogRoute extends Component {
  render(){
    return(
      <Switch>
        <Route exact path='/blog' component={AllBlog} />
        <Route exact path ='/blog/:path' component={BlogItem} />
      </Switch>
    )
  }
}

export default BlogRoute;
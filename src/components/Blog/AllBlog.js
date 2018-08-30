import React, { Component } from 'react';
import * as contentful from 'contentful';
import BlogItem from './BlogItem';

class AllBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.contentfulClient = contentful.createClient({
      space: process.env.REACT_APP_SPACE_KEY,
      accessToken: process.env.REACT_APP_ACCESSTOKEN
    });
  }

  componentDidMount() {
    this.fetchPosts().then(this.postsToState);
  }

  fetchPosts = () => this.contentfulClient.getEntries();
  postsToState = response => {
    this.setState({
      posts: response.items
    });
  };

  renderPosts = () => {
    return this.state.posts.map(({ fields }, id) => (
      <BlogItem key={id} {...fields} />
    ));
  };

  render() {
    return (
      <div>
        <h1>Blog</h1>
        {this.renderPosts()}
      </div>
    );
  }
}

export default AllBlog;

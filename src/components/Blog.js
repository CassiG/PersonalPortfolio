import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import MDReactComponent from 'markdown-react-js';

class Blog extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post, index) => {
      return (
        <article key={post.sys.id}>
          <h3>{post.fields.title}</h3>
          <MDReactComponent text={post.fields.body} />
        </article>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>Blog Posts</h2>
        {this.renderPosts()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { posts: state.posts.all };
}
export default connect(mapStateToProps, { fetchPosts })(Blog);

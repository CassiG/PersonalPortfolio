import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
// import Asset from './asset';
import MDReactComponent from 'markdown-react-js';
import Moment from 'react-moment';
import 'moment-timezone';

class Blog extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post, index) => {
      return (
        <article key={post.sys.id}>
      
          <h3>{post.fields.title}</h3>
          <p>Posted on: <Moment parse="YYYY-MM-DD HH:mm">{post.fields.post}</Moment></p>
          <MDReactComponent text={post.fields.body} />
        </article>
      );
    });
  }
  render() {
    return (
      <div>
        <h1>Blog</h1>
        {this.renderPosts()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { posts: state.posts.all };
}
export default connect(mapStateToProps, { fetchPosts })(Blog);

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class BlogItem extends Component {
    render(){
        return(
            <div>
                <Link to={{
                    pathname: `/blog${this.props.path}`,
                    state: { ...this.props }
                }} >{this.props.title}</Link>
            </div>
        )
    }
}

export default BlogItem;
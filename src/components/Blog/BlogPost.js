import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class BlogPost extends Component {
    constructor(props){
        super(props);
        this.post = this.props.location.state
    }

    checkForHeader = () => {
        const image = this.props.location.state.headerImage.fields
        if (image) {
            <img src={'https:' + image.file.url} alt={image.description}/>
        }
    }
    render(){
        return(
            <div>
                {this.checkForHeader}
                <h2>{this.post.title}</h2>
                <p>{this.post.body}</p>
                <p>Posted on: {this.post.postDate}</p>
                <Link to='/blog'>Back</Link>
                
            </div>
        )
    }
}

export default BlogPost;
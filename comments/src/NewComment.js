import React, { Component } from 'react';
import './NewComment.css';

class NewComment extends Component {

    state = {
        newComment: ''
    }

    handleChange = event => {
        this.setState({ newComment: event.target.value })
    }

    sendComment = () => {
        this.props.sendComment(this.state.newComment);
        this.setState({ newComment: '' });
    }

    render() {
        return (
            <div className="NewComment">
                <textarea value={this.state.newComment} onChange={this.handleChange}></textarea>
                <button onClick={this.sendComment}>enviar</button>
            </div>
        )
    }
}

export default NewComment;
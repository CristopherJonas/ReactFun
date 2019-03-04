import React, { Component } from 'react';
import Comments from './Comments';
import NewComment from './NewComment';
import './App.css';

class App extends Component {

  state = {
    comments: {},
    isLoading: true
  }

  sendComment = val => {
    const { database } = this.props;
    const id = database.ref().child('comments').push().key;
    const comments = {};
    comments['comments/' + id] = {
      comment: val
    }
    database.ref().update(comments);
  }

  componentDidMount() {
    const { database } = this.props;
    this.comments = database.ref('comments');
    this.comments.on('value', snapshot => {
      this.setState({ comments: snapshot.val(), isLoading: false })
    })
  }

  render() {
    return (
      <div className="App">
        <NewComment sendComment={this.sendComment} handleChange={this.handleChange} newComment={this.state.newComment} />
        <Comments comments={this.state.comments} />
        {this.state.isLoading && <p>Carregando comentários</p>}
      </div>
    );
  }
}

export default App;

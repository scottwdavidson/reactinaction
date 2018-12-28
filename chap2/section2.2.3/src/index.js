import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
const root = document.getElementById("root");
class Post extends Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "post"
      },
      React.createElement(
        "h2",
        {
          className: "postAuthor",
          id: this.props.id
        },
        this.props.user,
        React.createElement(
          "span",
          {
            className: "postBody"
          },
          this.props.content
        ),
        this.props.children
        )
      )
    );
  }
}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

class Comment extends Component {
  render() {
    console.log("yo - rendering here");
    return React.createElement(
      "div",
      {
        className: "comment"
      },
      React.createElement(
        "h2",
        {
          className: "commentAuthor"
        },
        this.props.user,
        React.createElement(
          "span",
          {
            className: "commentContent"
          },
          this.props.content
        )
      )
    );
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};
const aComment = React.createElement(Comment, {
  id: 3,
  user: "ian",
  content: " commented: f you, you nerd!"
});
const App = React.createElement(
  Post,
  {
    id: 1,
    content: " said: this is a post!",
    user: "Ian"
  },
  React.createElement(Comment, {
    id: 2,
    user: "bob",
    content: " commented: wow! how cool!"
  }),
  aComment
);

const App = React.createElement(Post, {
  id: 1,
  content: " said: this is a post!",
  user: "Ian"
});

render(App, root);

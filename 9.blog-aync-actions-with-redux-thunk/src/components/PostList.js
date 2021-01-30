import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return <div>Post List</div>;
  }
}

//we don't have mapstatetoprops so we send the null so that we don't have any data to sore in the state
export default connect(null, { fetchPosts })(PostList);

import React from "react";
import { connect } from "react-redux";
import { fetchPosts, addPost } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
    // this.props.addPost();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
          <UserHeader userId={post.userId} />
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.posts);

    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return { posts: state.posts };
};

//we don't have mapstatetoprops so we send the null so that we don't have any data to sore in the state
export default connect(mapStateToProps, { fetchPosts, addPost })(PostList);

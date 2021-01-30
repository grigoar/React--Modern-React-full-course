import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

//this receive too much data, need to have only the user
class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    const { user } = this.props;
    if (!user) return <div>Loading...</div>;
    return <div className="header">{user.name}</div>;
  }
}

//ownProps is a copy to be send
//sending little data
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};
// const mapStateToProps = (state) => {
//   return { users: state.users };
// };

export default connect(mapStateToProps, { fetchUser })(UserHeader);

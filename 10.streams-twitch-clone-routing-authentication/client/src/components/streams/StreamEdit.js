import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

//for editing we can use a Selection Reducer-> When a user clicks on a stream to edit it, use a "selectionReducer" to record what stream is being edited;
//Other solution-> URL-based selection -> Put the ID of the stream being edited in the URL
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    // console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };
  //initialValues={{ title: "edit me", description: "change me" }}
  //we can send an object to the React form and it will match the initial values with the props that are used in that form.
  //initialValues is a special property
  // <StreamForm initialValues={{title:this.props.stream, description:...}} onSubmit={this.onSubmit} />
  render() {
    console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

//the mapStateToProps is called with two arguments : the global state data and the own props
const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
// import React from "react";
// import { connect } from "react-redux";
// import { fetchStream } from "../../actions";

// //for editing we can use a Selection Reducer-> When a user clicks on a stream to edit it, use a "selectionReducer" to record what stream is being edited;
// //Other solution-> URL-based selection -> Put the ID of the stream being edited in the URL
// class StreamEdit extends React.Component {
//   componentDidMount() {
//     this.props.fetchStream(this.props.match.params.id);
//   }
//   render() {
//     console.log(this.props);
//     if (!this.props.stream) {
//       return <div>Loading...</div>;
//     }
//     return <div>{this.props.stream.title}</div>;
//   }
// }

// //the mapStateToProps is called with two arguments : the global state data and the own props
// const mapStateToProps = (state, ownProps) => {
//   // console.log(ownProps);
//   return { stream: state.streams[ownProps.match.params.id] };
// };

// export default connect(mapStateToProps, { fetchStream })(StreamEdit);

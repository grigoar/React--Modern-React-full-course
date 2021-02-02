import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    // console.log(formValues);
    this.props.createStream(formValues);
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit}></StreamForm>
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);

// import React from "react";
// import { Field, reduxForm } from "redux-form";
// import { connect } from "react-redux";
// import { createStream } from "../../actions";

// class StreamCreate extends React.Component {
//   renderError({ error, touched }) {
//     if (touched && error) {
//       return (
//         <div className="ui error message">
//           <div className="header">{error}</div>
//         </div>
//       );
//     }
//   }

//   renderInput = ({ input, label, meta }) => {
//     // console.log({input});
//     // console.log(meta);
//     const className = `field ${meta.error && meta.touched ? "error" : ""}`;
//     return (
//       <div className={className}>
//         <label>{label}</label>
//         <input {...input} autoComplete="off" />
//         {this.renderError(meta)}
//       </div>
//     );
//     // return <input {...formProps.input} />;
//     // return <input onChange={formProps.input.onChange} value={formProps.input.value}></input>;
//   };

//   onSubmit = (formValues) => {
//     // console.log(formValues);
//     this.props.createStream(formValues);
//   };

//   render() {
//     // console.log(this.props);
//     return (
//       <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
//         <Field name="title" component={this.renderInput} label="Enter Title" />
//         <Field name="description" component={this.renderInput} label="Enter Description" />

//         <button className="ui button primary">Submit</button>
//       </form>
//     );
//   }
// }

// const validate = (formValues) => {
//   const errors = {};
//   if (!formValues.title) {
//     //if the user didn't enter a title
//     errors.title = "You must enter a title";
//   }
//   if (!formValues.description) {
//     errors.description = "You must enter a description";
//   }

//   return errors;
// };

// const formWrapped = reduxForm({
//   form: "streamCreate",
//   validate: validate,
// })(StreamCreate);

// export default connect(null, { createStream })(formWrapped);
// // export default connect()(reduxForm({
// //   form: "streamCreate",
// //   validate: validate,
// // })(StreamCreate));
// // export default reduxForm({
// //   form: "streamCreate",
// //   validate: validate,
// // })(StreamCreate);

import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

//passing props to the child from the parent
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h3>Warning!</h3>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:34PM"
          userComment="Hello there"
          fakerAvatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00PM"
          userComment="We will go on mars"
          fakerAvatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Grig"
          timeAgo="Yesterday at 6:34PM"
          userComment="Everybody dies"
          fakerAvatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

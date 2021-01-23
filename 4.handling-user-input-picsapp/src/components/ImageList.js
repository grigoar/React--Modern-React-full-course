import React from "react";

const ImageList = (props) => {
  //   console.log(props.images);
  //   const images = props.images.map((image) => {
  const images = props.images.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} />;
    // return <img alt={image.description} key={image.id} src={image.urls.regular} />;
  });
  return <div>{images}</div>;
};

export default ImageList;

//Challenge
// const usersList = this.users.map((user) => {
//   return <li key={user.id}>{user.name}</li>;
// });
// return <ul>{usersList}</ul>;

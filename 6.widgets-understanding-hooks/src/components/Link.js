import React from "react";

const Link = ({ className, href, children }) => {
  // console.log(props);
  // console.log(children);

  const onClick = (event) => {
    //if the metakey or ctrlKey we don't need all of that because it will be refreshed into the next tab
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    //changing the url without refreshing the page
    window.history.pushState({}, "", href);

    //some data has changed or url has changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;

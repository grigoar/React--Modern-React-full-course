import React, { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  //add a state in order to rerender itself when the path is changed
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      //   console.log("Location Change");
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);

    //is we don't want to show anymore the route on the screen we needto clean the event listener
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  //   return window.location.pathname === path ? children : null;
  return currentPath === path ? children : null;
};

export default Route;

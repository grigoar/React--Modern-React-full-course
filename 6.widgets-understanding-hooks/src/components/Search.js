import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);
  //   const [termTwo, setTermTwo] = useState("");

  //   console.log("I run with every render");
  //   console.log(results);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);
    //if the user update the term the return function is called the the timer is canceled
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };

    search();
  }, [debouncedTerm]);

  //   useEffect(() => {
  //     // console.log("Initial render or term was changed");
  //     // return () => {
  //     //   console.log("cleanup");
  //     // };

  //     //how to run async function in useEffect V3-using promises
  //     // axios.get("url").then((response) => {
  //     //   console.log(response.data);
  //     // });

  //     //how to run async function in useEffect V2-using IFFI
  //     // (async () => {
  //     //   await axios.get("url");
  //     // })();
  //     //how to run async function in useEffect V1
  //     const search = async () => {
  //       const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
  //         params: {
  //           action: "query",
  //           list: "search",
  //           origin: "*",
  //           format: "json",
  //           srsearch: term,
  //         },
  //       });

  //       setResults(data.query.search);
  //     };

  //     if (term && !results.length) {
  //       search();
  //     } else {
  //       const timeoutId = setTimeout(() => {
  //         if (term) {
  //           search();
  //         }
  //       }, 500);
  //       return () => {
  //         clearTimeout(timeoutId);
  //       };
  //     }

  //     // console.log("I only use first time '[]'");
  //     // console.log("I run at initial render and after at every render ' '" );
  //     // console.log("Run after every rerender if data has changed since last render '[term]'");
  //   }, [term, results.length]);
  //   //   }, [term, termTwo]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className={`item `}>
        <div className="right floated content">
          <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input value={term} onChange={(e) => setTerm(e.target.value)} className="input"></input>
        </div>
        <div className="ui celled list">{renderedResults}</div>
      </div>
    </div>
  );
};

export default Search;

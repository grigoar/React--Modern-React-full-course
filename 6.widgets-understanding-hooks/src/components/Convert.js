import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "./api";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);
  // console.log(API_KEY);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    // console.log(API_KEY);
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: API_KEY,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, debouncedText]);
  //   useEffect(() => {
  //     const doTranslation = async () => {
  //       const { data } = await axios.post(
  //         "https://translation.googleapis.com/language/translate/v2",
  //         {},
  //         {
  //           params: {
  //             q: text,
  //             target: language.value,
  //             key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
  //           },
  //         }
  //       );
  //       setTranslated(data.data.translations[0].translatedText);
  //     };

  //     doTranslation();
  //   }, [language, text]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;

//Challenge
// useEffect(() => {
//   const getUsers = async () => {
//     const resUsers = await axios.get("URL", {
//       params: {
//         q: text,
//       },
//     });
//     setUsers(resUsers);
//   };
//  getUsers();
// }, [users]);

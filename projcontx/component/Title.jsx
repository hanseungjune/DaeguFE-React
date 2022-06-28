import React from "react";
import LangContext from "../LangContext";

// function Title({lang}) {
//     const text = lang === "en"? "컨텍스트" : "Context";
//     return <h1>{text}</h1>;
// }

function Title() {
  return (
    <LangContext.Consumer>
        {lang => {
          const text = lang === "en" ? "Context" : "컨텍스트";
          return <h1>{text}</h1>;
        }}
    </LangContext.Consumer>
  );
}

export default Title;
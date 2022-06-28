import React, { Component } from 'react';
import Button from "./component/Button";
import Title from "./component/Title";
import Message from "./component/Message";
import LangContext from './LangContext';


class App extends Component {
  state = {lang: "en"};

  toggleLang = () =>{
    this.setState(({lang}) => ({
      lang: lang === "en"? "kr" : "en"
    }));
  }
  render() {
    const {lang} = this.state;
    return (
      // <Fragment>
      //   <Button lang={lang} toggleLang={this.toggleLang} />
      //   <Title lang={lang} />
      //   <Message lang={lang} />
      // </Fragment>
      <LangContext.Provider value={lang}>
        <Button toggleLang={this.toggleLang} />
        <Title/>
        <Message lang={lang} />
      </LangContext.Provider>
    );
  }
}

export default App;

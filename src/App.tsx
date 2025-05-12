import React from 'react';
import './App.module.scss';
import style from './App.module.scss';
import {Main} from "./components/Main/Main"
import 'src/common/styles/index.scss'
import {Miracles} from "./components/Miracle/Miracles"
import {Header} from "./components/Header/Header"
import {Footer} from "./components/Footer/Footer"

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Main/>
      <Miracles/>
      <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.module.scss';
import style from './App.module.scss';
import {Main} from "./components/Main/Main"
import 'src/common/styles/index.scss'
import {Miracles} from "./components/Miracle/Miracles"
import {Header} from "./components/Header/Header"

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Main/>
      <Miracles/>
    </div>
  );
}

export default App;

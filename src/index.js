import React from 'react';
// react-domのrenderを使うってこと
import { render } from 'react-dom';
// 相対パスでファイルを読み込める。
import './index.css';
// jsファイルは拡張子いらない
import App from "./App";
//import HelloMessage from "./HelloMessage";

/*
const name = "your name"
const className = "title"
*/

/*
render関数
描画する
*/
render (

/*
React Elementの生成

param1:HTMLタグorComponent
param2:props(親(外部)からの属性),HTMLタグのときは属性値の指定
param3:子要素

  React.createElement('h1', { className: 'title' }, "Hello, World!!"),

JSX: javascriptの中にHTMLタグが書けるように拡張した言語

外部の値を参照したいときには{}で囲う。

  <h1 className={className}>Hello, {name}</h1>,
*/

/**
* HelloMessageを呼び出す。
* name属性を指定する場合としない場合の２つを表示する。
*/

/*
  <div>
    <HelloMessage />
    <HelloMessage name="everyone" />
  </div>,
*/

// Appコンポーネントを描画
  <App />,

// rederのターゲットを指定する。index.htmlのroot(id)に描画するよってことになる。
  document.getElementById('root')
);

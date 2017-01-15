import React from 'react';
// react-domのrenderを使うってこと
import { render } from 'react-dom';
// 相対パスでファイルを読み込める。
import './index.css';

/*
render関数
描画する
*/
render(
/*
React Elementの生成

param1:HTMLタグorComponent
param2:props(親(外部)からの属性),HTMLタグのときは属性値の指定
param3:子要素

*/
    React.createElement('h1', { className: 'title' }, "Hello, World!!"),

// rederのターゲットを指定する。index.htmlのroot(id)に描画するよってことになる。
    document.getElementById('root')
);

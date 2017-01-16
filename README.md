# First-ReactApp!!
* create-react-appを使ってwebアプリの開発法を学ぶ

# 環境構築
使ったもの  
- OS X El Captain

手順  
1. Node.js(ver4以上)をインストール(済みの人は飛ばしてOK):  
```
$ brew install node
```  
2. npmを利用して、create-react-appをインストール  
```
$ npm install -g create-react-app
```
3. 作りたい場所で、下記のコマンドを実行(XXX:任意のファイル名)  
```
$ create-react-app XXX
```  
4. 作成したディレクトリの内部に移動し、サーバーを実行  
```
$ npm start
```  

http://localhost:3000 を開いて画面が描画されたら構築完了！！

# DOMに描画してみる
初期状態だと少し分かり辛いので、  
index.jsを書き換える。  

**index.js**
```javascript
import React from 'react';
import { render } from 'react-dom';
import './index.css';

render (
  React.createElement('h1', { className: 'title' }, "Hello, World!!"),
  document.getElementById('root')
);
```

# JSXを使う
## JSXとは
* javascriptの中にHTMLタグが書けるように拡張した言語
* Reactを開発したFaceBook側は、JSXで書くことを推奨。

## 書き方
以下のように定数を定義しておく.  

**index.js**
```javascript
const name = "your name"
const className = "title"
```

下記のコードはDOMに描画する要素を作成する。  

```javascript
React.createElement('h1', { className: 'title' }, "Hello, World!!")
```

さっきのコードは以下のように書き換えられる。  

```javascript
<h1 className={className}>Hello, {name}</h1>
```  

{}で囲うことで外部変数を参照できる。  
ウェブページ上の要素としての可読性が高くなる。  

# Componentを作って使う
## Componetとは
素の意味は「部品」だが、そのイメージでオッケー。ReactはComponentを組み合わせてUIを作り上げる。
## 作る
一番簡単な作り方はjavascriptの関数を使えばできる。下記はHelloMessageというComponentが作成される関数である。  
**HelloMessage.js**  
```javascript
function HelloMessage(props) {
  return <p>Hello, {props.name}</p>
}
```
propsは外部の変数がまとめて入ったものとか、そんなイメージで今はおけ。  
**props.name** は外部から指定されたname属性の変数を参照にしているということ。  
これで、Componentが作られる。
## 使う
HTMLタグのように指定して使うことができる。
```javascript
<HelloMessage name="hoge"/>
```
ここで指定したnameがpropsを介して参照することができる！

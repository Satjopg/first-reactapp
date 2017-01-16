import React, {PropTypes} from "react";

/**
* Componetの定義
* 描画したいものを定義する。
* propsで外部からの値を参照。
* この場合、外部から受け取ったname属性の値を参照している。
* ちなみにComponentの定義は他にも存在する。
* 例1: var MyComponent = React.createClass({...})(チュートリアルのやり方その１)
* 例2: class MyComponent extends React.Component {}(デフォルトで作られるやつ)
*/

function HelloMessage(props) {
  return <p>Hello, {props.name}</p>
}

/**
* 外部からの指定がなかった時ようにデフォルト値を決めておける。
*/
HelloMessage.defaultProps = {
  name:"World",
}

/**
* 外部から受け取る値の属性とその型を指定できる。
* 指定しなくても動くが、バグチェックが楽。
*/
HelloMessage.propTypes = {
  name: PropTypes.string,
}

export default HelloMessage;

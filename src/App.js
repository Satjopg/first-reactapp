import React, {Component} from "react";
import HelloMessage from "./HelloMessage";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // thisはコンストラクタ内では、作られるインスタンス自身を指す。
    this.state = {
      input: "",
      names: [],
    };
    /**
    * 関数を初期化したときの状態でbindする
    * javascriptは関数をその時々の状況(コンテキスト)によって関数等を作成するので
    * 予期していた値が入らないなどの可能性が考えられる。
    * そこで、bindを行うことで作られた状態で束縛することができる。
    */
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
// input(テキストフィールドの値)が変わったときに実行.
  handleChange(event) {
    // eventを発生させたオブジェクトの値を代入。
    this.setState({input: event.target.value});
  }
/** formオブジェクトの「送信が押された時」に実行.
* 今回は、formオブジェクトにinputが含まれているので,
* inputでEnterが押されたときに実行することになる.
*/
  handleSubmit(event) {
    // eventをキャンセルするときに使う。
    // formはキャンセルしないとPOSTしてしまうので、キャンセルすることで防ぐ
    event.preventDefault();
    this.setState({
      input: "",
      names: this.state.names.concat(this.state.input)
    });
  }
/**
* render():描画するコンポーネントを返す。
*/

/**
* HelloMessageに現在のinputの値を与えることで
* inputの値が変わるたびにレンダリングされるviewができる。
*/
  render() {
    // namesの値からリストの要素を作成
    const lists = this.state.names.map((name, index) => (
      <li key={index}>
        <HelloMessage name={name} />
      </li>
    ));
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <HelloMessage name={this.state.input} />
          </div>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
            />
        </form>
        <ul>{lists}</ul>
      </div>
    )
  }
}

export default App;

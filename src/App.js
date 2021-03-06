import React, { Component } from 'react';
import './App.css';
import Question from './question';

const qAndA = [{
  question: "毛利率",
  ans: 18
}, {
  question: "利益率",
  ans: 1.8
}, {
  question: "稅前淨利率",
  ans: 1.7
}, {
  question: "稅後淨利率",
  ans: 1.3
}];
class App extends Component {
  state = {
    showRes: false
  }

  checkAns() {
    this.setState({showRes: true});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>請計算下列利潤比率</h3>
          <h5>(小數點一位以下四捨五入，例如15.67% -> 15.7%)</h5>
        </header>
        <div>
          {qAndA.map((q, idx) => {
            return (
              <div key={idx}>
                <Question
                  question={q.question}
                  ans={q.ans}
                  showRes={this.state.showRes} />
              </div>
            )
          })}
        </div>
        <div className="App-button">
          <button onClick={this.checkAns.bind(this)}>提交答案</button>
        </div>
      </div>
    );
  }
}

export default App;

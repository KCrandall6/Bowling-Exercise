
import React, { Component, useState } from "react";
import '../style.scss';
import ScoreCalculator from './ScoreCalculator.jsx';


const App = () => {

  const [rollCount, setRollCount] = useState(0);

  const Frame = ({ frameNumber, frame1, frame2, cumulative, score }) => (
    <div className="frame">
      <div className="frame-number">Frame {frameNumber}</div>
      <div className="frame-score">
        <div className="frame1">{frame1}</div>
        <div className="frame2">{frame2}</div>
        <div className="cumulative">{cumulative}</div>
      </div>
      <div className="running-score">{!isNaN(score) && score}</div>
    </div>
  );

  const incrementer = (i) => {
    handleRoll(i);
    setRollCount(rollCount + 1);
  }

  const Controls = ({ handleRoll, pinsUp }) => (
    <div className="controls">
      <div className="controls-left">
        {[...Array(pinsUp + 1)].map((o, i) => (
          <button key={i} className="roll" onClick={() => handleRoll(i)}>
            {i}
          </button>
        ))}
      </div>
    </div>
  );

  class ScoreBoard extends Component {
    constructor() {
      super();
      this.game = ScoreCalculator.create();
      this.state = {
        score: this.game.score()
      };
    }

    roll = pins => {
      this.game.roll(pins);
      this.setState({ score: this.game.score() });
    };

    pinsUp = () => this.game.pinsUp();

    render() {
      const { score } = this.state;

      return (
        <div>

          <div className="player-name">Enter Name:
            <input></input>
          </div>

          <div className="score-board">
            {[...Array(10)].map((o, i) => (
              <Frame
                key={i}
                frameNumber={i + 1}
                frame1={score[i].frame1}
                frame2={score[i].frame2}
                cumulative={score[i].cumulative}
                score={score[i].cumulativeScore}
              />
            ))}
          </div>
          <div className='button-area'>
            <h3>How many pins did you hit</h3>
          </div>
          <Controls handleRoll={this.roll} setRollCount={setRollCount} pinsUp={this.pinsUp()} />
        </div>
      );
    }
  }


  
  return (
    <div className="App">
      <div className='title'>
        <h1>- Hello Bowlers! -</h1>
      </div>
      <ScoreBoard />
    </div>
  )
}

export default App;

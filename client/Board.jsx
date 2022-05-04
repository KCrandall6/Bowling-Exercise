import React, { Component, useState } from 'react';
import '../style.scss';

const Board = (props) => {

  // props data
  const [game, setGame] = props.functions;
  const [pins, setPins] = useState(0);
  const [bowlCount, setBowlCount] = useState(1);


  // maybe make pins an array, push into array; for first element add to 0 for first score
  const pinCount = (num) => {
    setPins(pins + num);
    setBowlCount(bowlCount + 1);
    if (bowlCount >= 2) {
      setBowlCount(1);
      setPins(0);
    }
  }
  
  console.log('bowl', bowlCount);
  console.log('pins', pins);

  return (
    <div>
      <p>scoreboard</p>
      <div className='Container'>
        <table id='table' className='Scorecard' cellPadding='1' cellSpacing='0'>
          <thead>
            <tr id='frame-name'>
              <th id='c1' colSpan='6'>Frame 1</th>
              <th id='c2' colSpan='6'>Frame 2</th>
              <th id='c3' colSpan='6'>Frame 3</th>
              <th id='c4' colSpan='6'>Frame 4</th>
              <th id='c5' colSpan='6'>Frame 5</th>
              <th id='c6' colSpan='6'>Frame 6</th>
              <th id='c7' colSpan='6'>Frame 7</th>
              <th id='c8' colSpan='6'>Frame 8</th>
              <th id='c9' colSpan='6'>Frame 9</th>
              <th id='c10' colSpan='6'>Frame 10</th>
              <th id='c11' colSpan='6'>Total Score</th>
            </tr>
        </thead>
          <tbody>
            <tr id='bowl-scores'>
            </tr>
            <tr id='total-scores'>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='pin-buttons'>
        <button type="button" onClick={() => pinCount(0)}>0</button>
        <button hidden={pins > 9} type="button" onClick={() => pinCount(1)}>1</button>
        <button hidden={pins > 8} type="button" onClick={() => pinCount(2)}>2</button>
        <button hidden={pins > 7} type="button" onClick={() => pinCount(3)}>3</button>
        <button hidden={pins > 6} type="button" onClick={() => pinCount(4)}>4</button>
        <button hidden={pins > 5} type="button" onClick={() => pinCount(5)}>5</button>
        <button hidden={pins > 4} type="button" onClick={() => pinCount(6)}>6</button>
        <button hidden={pins > 3} type="button" onClick={() => pinCount(7)}>7</button>
        <button hidden={pins > 2} type="button" onClick={() => pinCount(8)}>8</button>
        <button hidden={pins > 1} type="button" onClick={() => pinCount(9)}>9</button>
        <button hidden={pins > 0} type="button" onClick={() => pinCount(10)}>10</button>
      </div>
    </div>
  )
}

export default Board;
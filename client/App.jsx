import React, { Component, useState } from 'react';
import '../style.scss';
import Board from './Board.jsx'

const App = () => {

  const [game, setGame] = useState({
      frames: '',
      cumulativeScores: [],
      pins: '',
      rolls: '',
  })

  // const [total, setTotal] = useState(cumulativeScores.slice(-1)[0])

  return (
    <div>
      <h1>Hello Bowlers!</h1>
      <div>
        <Board game = {game} functions={[game, setGame]}/>
      </div>
    </div>
  )
}

export default App;
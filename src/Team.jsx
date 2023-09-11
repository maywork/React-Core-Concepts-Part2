import { useState } from "react"

export default function Team() {
  const [players, setPlayers] = useState(11);

  const teamStyle = {
    border: '2px solid tomato',
    margin: '10px',
    padding: '35px',
    borderRadius: '10px'
  }

  const btnStyle = {
    margin: '5px'
  }

  const handleAdd = () => {
    setPlayers(players + 1)
  }
  const handleRemove = () => {
    setPlayers(players - 1)
  }

  return (
    <div style={teamStyle}>
      <h2>Players: {players}</h2>
      <button style={btnStyle} onClick={handleAdd}>Add Player</button>
      <button style={btnStyle} onClick={handleRemove}>Remove Player</button>
    </div>
  )
}
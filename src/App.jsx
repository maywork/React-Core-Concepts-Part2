import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {

  function handleClick() {
    alert('clicked')
  }

  const handleClickMeToo = () => {
    alert('I am clicked too!')
  }

  const addFive = (num) => {
    alert(`here ${num} is added to 5 making the sum ${num + 5}`);
  }

  return (
    <>
      <h1>Vite + React Part 2</h1>
      <Friends />
      <Users />
      <Team />
      <Counter />

      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClickMeToo}>Click MeToo</button>
      <button onClick={() => {alert('Chicked MeThree!')}}>Click MeThree</button> */}

      {/* complex */}
      {/* <button onClick={() => addFive(3)}>addFive</button> */}
    </>
  )
}

export default App

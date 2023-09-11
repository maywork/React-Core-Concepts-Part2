import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0);
  
  const handleAdd = () => {
    setCount(count + 1)
  }
  const handleReduce = () => {
    setCount(count - 1)
  }

  return (
    <div style={{border: '2px solid yellowgreen', margin:'10px', padding:'35px', borderRadius:'10px'}}>
      <h3>Counter: {count}</h3>

      <button style={{marginRight:'10px'}} onClick={handleReduce}>Reduce</button>
      <button style={{marginLeft:'10px'}} onClick={handleAdd}>Add</button>
    </div>
  )
}
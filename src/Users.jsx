import { useEffect, useState } from "react"

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h3>Users: {users.length}</h3>
    </div>
  )
}

/** 
 * STEPS:
 * 1. Create a state variable called users and set it to an empty array
 * 2. Create a useEffect hook (with callback & dependency array) that fetches the users from the API
 */
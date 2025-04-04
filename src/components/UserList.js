// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// const UserList = () => {
//     const [users, setUsers]=useState([])
//     const [loading, setLoading]=useState(true)

//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res=>res.json())
//             // console.log("hello"))
//         .then((data)=>{
//             console.log("data", data)
//             setLoading(false)
//             setUsers(data)
//         })
//         .catch((e)=>{
//             console.log("not fetching")
//             console.log("e    ", e)
//             setLoading(false)
//         })
//     },[])
//     if(loading) return <p>Loading...</p>
//   return (
//     <div>
        
//         <h1>User List</h1>
//         <ul>
//             {
//                 users.map((user)=>(
//                     <li key={user.id}>
//                         <Link to={`/users/${user.id}`}>
//                             {user.name}
//                         </Link>
//                     </li>
//                 ))
//             }
//         </ul>
      
//     </div>
//   )
// }

// export default UserList
/////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'regenerator-runtime/runtime'

function UserList() {
  const [users, setUsers] = useState([]);
  
    const [loading, setLoading]=useState(true)

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setLoading(false)
      setUsers(data);
    }

    fetchUsers();
  }, []);
  
    if(loading) return <p>Loading...</p>
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
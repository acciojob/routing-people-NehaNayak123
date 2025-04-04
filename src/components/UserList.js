import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UserList = () => {
    const [users, setUsers]=useState([])
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
            // console.log("hello"))
        .then((data)=>{
            console.log("data", data)
            setLoading(false)
            setUsers(data)
        })
        .catch((e)=>{
            console.log("not fetching")
            console.log("e    ", e)
            setLoading(false)
        })
    },[])
    if(loading) return <p>Loading...</p>
  return (
    <div>
        
        <h1>User List</h1>
        <ul>
            {
                users.map((user)=>(
                    <li key={user.id}>
                        <Link to={`/user/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>
                ))
            }
        </ul>
      
    </div>
  )
}

export default UserList

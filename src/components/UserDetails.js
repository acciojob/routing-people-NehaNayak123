import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const {userId}=useParams();
    const [user,setUsers]=useState(null)
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        setLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res=>res.json())
        .then((data)=>{
            setUsers(data);
            setLoading(false)
        })
    },[userId]);

    if(loading)  return<p>Loading...</p>

  return (
    <div>
        <h2>User Details</h2>
        <p><strong>Name: </strong>${user.name}</p>
        <p><strong>Username: </strong>${user.username}</p>
        <p><strong>Email: </strong>${user.email}</p>
        <p><strong>Phone: </strong>${user.phone}</p>
        <p><strong>Website: </strong>${user.website}</p>
      
    </div>
  )
}

export default UserDetails

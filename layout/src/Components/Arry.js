import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Arry = () => {
const [array,setArry]=useState([]);
useEffect(()=>{
    // axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>setArry(res.data)).catch(err=>console.log(err))
    fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
      result.json().then((resp)=>{
        // console.log("result",resp);
        setArry(resp)

      })
    })
  })


  return (
    <div>
     {
array.map((i)=>{
    return(
        <ul style={{border:'2px solid green'}}>
        <li>UserID:{i.userId}</li>
        <li>Title: {i.title}</li>
        <li>Desc: {i.body}</li>

    </ul>
    )
})
       
     }
    </div>
  )
}

export default Arry

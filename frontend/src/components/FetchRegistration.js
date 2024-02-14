import React , {useEffect, useState} from 'react'
import axios from axios;

const FetchRegistration = () => {
    const  [res, setRes]     =useState ([])
    useEffect(()=>{
      axios.get('http://localhost:8080/retrieve',{})
        .then (Response=>{
            setRes (response.data)
            console.log(response.data)

    })},
    [])
    


    
  return (
    <div><h1>Registration</h1>
    { JSON.stringify(res)}
    </div>
  )
}

export default FetchRegistration
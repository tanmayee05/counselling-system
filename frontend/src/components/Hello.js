import React from 'react'

function Hello(props) {
    
  return (
    <div>
        <h1>HELLO KLU {props.name} id is {props.id}</h1>
        {props.childern}
    </div>
  )
}

export default Hello
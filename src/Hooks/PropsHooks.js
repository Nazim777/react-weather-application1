import React from 'react'

const PropsHooks = (props) => {
  return (
    <div>
      <p>{`hello my name is ${props.data.name} and my proffession is ${props.data.profession} , i live at ${props.data.city} in ${props.data.country}`}</p>
      
    </div>
  )
}

export default PropsHooks

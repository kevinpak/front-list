import React from 'react'

const Agent = (props) => {
  return (
    <small className="text-primary float-rigth"> Агент: {`${props.attributes.first_name} ${props.attributes.last_name}`} </small>
  )
}

export default Agent;
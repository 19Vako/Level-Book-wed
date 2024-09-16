import React from 'react'
import { useLocation } from 'react-router'

const Level = () => {
  
  const location = useLocation()
  const { level } = location.state

  return (
   <div>
      <h1>{level}</h1>
   </div>
  )
}

export default Level
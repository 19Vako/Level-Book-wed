import React from 'react'
import { useLocation } from 'react-router'
import Header from '../components/Header'

const Level = () => {
  
  const location = useLocation()

  return (
   <div>
      <Header/>
   </div>
  )
}

export default Level
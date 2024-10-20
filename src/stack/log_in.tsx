import React from 'react'
import "./log_in.css"
import { Link } from 'react-router-dom'

const Log_in = () => {
  return (
<div className="video-background">

  <video autoPlay muted loop>
     <source src="/videos/159948-820010982.mp4" type="video/mp4" />
  </video>

  <div className="content">
     <div className='formContainer'>
           <h1>Log in</h1>
        
           <input type='text' />
           <input type='password' />
       
           <div className='buttons'>
               <Link to='/user' className='log_in'>
                  <h2>Log in</h2>                                                   
               </Link>
               <Link to='/sign_up' className='sign_up' >
                  <h2>Sign up</h2>                                                   
               </Link>
               
           </div>
     </div>
  </div>

</div>
  )
}

export default Log_in
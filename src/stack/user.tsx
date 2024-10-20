import React from 'react'

//css styles
import '../components/topForBeginners.css'
import './user.css'

import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { changeTheme } from '../store/slices/themeSlice';


// icons
import { FaUserCircle } from "react-icons/fa";
import { ImSun } from "react-icons/im";
import { FaMoon } from "react-icons/fa";

const User = () => {

  const Dispatch = useAppDispatch()
  const theme = useAppSelector(state => state.Theme)

  return (
  <div>
    <div className='HeaderContainer' style={{backgroundColor: theme.headerBackground}}>
      <div className='Header' >

        <Link to='/' className='logoLink'>
          <div className='logoContainer' style={{backgroundColor: theme.headerBackground}}>
            <img className='logoIcon' src='/book.png' alt=''/>
            <h1>Level Book</h1>
          </div>
        </Link>
     
        <div className='headerOptions'>
          <div className='themeAndUser' onClick={() => Dispatch(changeTheme())}>
            {theme.bodyBackground === 'white' ? <ImSun className='iconTheme'/> : <FaMoon className='iconTheme' style={{transform: 'none'}}/>}
          </div>
         
        </div>

      </div>
    </div>


      <div className='userContainer'>
       
        <FaUserCircle className='userIcon' onClick={() => console.log("Вы нажали на смену иконки")}/>
        <h1 className='userName'>User name</h1>
        
        <div className='pngBooks'>
          <img className='pngBook' src='/imgs/pngwing.com (2).png' alt=''/>
          <img className='pngBook' src='/imgs/pngwing.com (3).png' alt=''/>
        </div>
       
      </div>
      
      <div className='readingNow'>
        <h1 style={{color: theme.color}}>READING NOW</h1>
        
      </div>

      <div className='favoriteBooks'>
        <h1 style={{color: theme.color}}>FAVORITE BOOKS</h1>
      </div>

      

      <div className='library'>
        <h1 style={{color: theme.color}}>LIBRARY</h1>
      </div>
     
  </div>
  )
}

export default User
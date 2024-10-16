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
  const theme = useAppSelector(state => state)

  return (
  <div>
    <div className='HeaderContainer' style={{backgroundColor: theme.Theme.headerBackground}}>
      <div className='Header' >

        <Link to='/' className='logoLink'>
          <div className='logoContainer' style={{backgroundColor: theme.Theme.headerBackground}}>
            <img className='logoIcon' src='/book.png' alt=''/>
            <h1>Level Book</h1>
          </div>
        </Link>
     
        <div className='headerOptions'>
          <div className='themeAndUser' onClick={() => Dispatch(changeTheme())}>
            {theme.Theme.bodyBackground === 'white' ? <ImSun className='iconTheme'/> : <FaMoon className='iconTheme' style={{transform: 'none'}}/>}
          </div>
        </div>

      </div>
    </div>

      <div className='userContainer'>
        <FaUserCircle className='userIcon' onClick={() => console.log("Вы нажали на смену иконки")}/>
      </div>

  </div>
  )
}

export default User
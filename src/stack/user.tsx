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
import { IoLibrary } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";

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
          <RiUserSettingsFill className='userSettingIcon' />
        </div>

      </div>
    </div>

      <div className='userContainer'>
        <FaUserCircle style={{color: theme.color}} className='userIcon' onClick={() => console.log("Вы нажали на смену иконки")}/>
        <h1 className='userName' style={{color:theme.color}}>user name</h1>

        <div className='userActions'>
          <div 
            className='iconContainer' 
            style={{border: `1px solid ${theme.color}`}}>
              <FaHeart className='icon' style={{color: theme.color}}/>
              <h1  style={{color: theme.color}}>Favorite books</h1>
          </div>
          <div 
            className='iconContainer' 
            style={{border: `1px solid ${theme.color}`}}>
              <FaBookReader className='icon' style={{color: theme.color}}/>
              <h1  style={{color: theme.color}}>Reading now</h1>
          </div>

          <div 
            className='iconContainer' 
            style={{border: `1px solid ${theme.color}`}}>
              <IoLibrary className='icon' style={{color: theme.color}}/>
              <h1  style={{color: theme.color}}>Library</h1>
          </div>
        </div>

      </div>
     
  </div>
  )
}

export default User
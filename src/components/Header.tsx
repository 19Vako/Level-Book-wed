import React from 'react'
import './headerStyles.css'
import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../store/hooks';
import { changeTheme } from '../store/slices/themeSlice';

// icons
import { SiFacebookgaming } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import { ImSun } from "react-icons/im";
import { FaMoon } from "react-icons/fa";



const Header = () => {

  const Dispatch = useAppDispatch() 
  const theme = useAppSelector(state => state)

  return (
    
    <div  className='HeaderContainer' style={{backgroundColor: theme.Theme.headerBackground}}>
      
    <div className='Header' >

      <Link to='/' className='logoLink'>
        <div className='logoContainer' style={{backgroundColor: theme.Theme.headerBackground}}>
          <SiFacebookgaming className='logoIcon' /> 
          <h1>Level Book</h1>
        </div>
      </Link>


      
     
      <div className='headerOptions'>
        <div className='Levels'>
        <Link to='/A1'><h1>A1</h1></Link>
        <Link to='/A2'><h1>A2</h1></Link>
        <Link to='/B1'><h1>B1</h1></Link>
        <Link to='/B2'><h1>B2</h1></Link>
        <Link to='/C1'><h1>C1</h1></Link>
        <Link to='/C2'><h1>C2</h1></Link>
      </div>
      <div className='themeAndUser' onClick={() => Dispatch(changeTheme())}>
        {theme.Theme.bodyBackground === 'white' ? <ImSun className='iconTheme'/> : <FaMoon className='iconTheme' style={{transform: 'none'}}/>}
      </div>
      <FaUserCircle className='iconUser'/>
      </div>

    </div>

   </div>
  )
}

export default Header


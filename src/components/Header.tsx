import React from 'react'
import './headerStyles.css'


import { useAppSelector } from '../store/hooks';

// icons
import { SiFacebookgaming } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import { ImSun } from "react-icons/im";
import { Link } from 'react-router-dom';



const Header = () => {

  const theme = useAppSelector(state => state)
  console.log(theme)

  return (
    
    <div className='HeaderContainer' style={{backgroundColor: theme.Theme.headerBackground}}>
      
      <Link to='/' className='logoLink'>
        <h1>Головна</h1>
        <div className='logoContainer' style={{backgroundColor: theme.Theme.headerBackground}}>
          <SiFacebookgaming className='logoIcon' /> 
          <h1>Level Book</h1>
        </div>
      </Link>

      <div className='levelsList'>

       <Link className='linkContainer' to= '/level' state={{ level: "Уровень 2"}} >
       <h1 className='link'>A1</h1>
       </Link>

       <Link className='linkContainer' to= '/level' state={{ level: "Уровень 2"}} >
       <h1 className='link'>A2</h1>
       </Link>

       <Link className='linkContainer' to= '/level' state={{ level: "Уровень 2"}} >
       <h1 className='link'>B1</h1>
       </Link>

       <Link className='linkContainer' to= '/level' state={{ level: "Уровень 2"}} >
       <h1 className='link'>B2</h1>
       </Link>

       <Link className='linkContainer' to= '/level' state={{ level: "Уровень 2"}} >
       <h1 className='link'>C1</h1>
       </Link>

       <Link className='linkContainer' to= '/level' state={{ level: "Уровень 2"}} >
       <h1 className='link'>C2</h1>
       </Link>

      </div>

      <div className='themeAndUser'>
        <ImSun className='iconTheme'/>
        <FaUserCircle className='iconUser'/>
      </div>
    </div>
  )
}

export default Header


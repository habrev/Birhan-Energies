import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (

    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
        <h2>Brent Oil Price Analysis Dashboard</h2>
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon' style={{ marginRight: '30px' }}/>
            <BsFillEnvelopeFill className='icon' style={{ marginRight: '30px' }}/>
            <BsPersonCircle className='icon'/>
        </div>
    </header>
  )
}

export default Header
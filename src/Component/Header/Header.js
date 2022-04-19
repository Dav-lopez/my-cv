import React from 'react'
import './Header.css'
function Header() {
  return (
    <div >
        <header className= 'robo'>
          <nav >
            <h2> MY <span> CV</span> </h2>
            <ul className= 'robo'>
                <li><a href>Home</a></li>
                <li><a href>School</a></li>
                <li><a href>About</a></li>
                <li><a href>Contact</a></li>
            </ul>
          </nav>
           
        </header>
    </div>
  )
}

export default Header
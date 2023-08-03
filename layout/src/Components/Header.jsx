import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='header' style={{backgroundColor:'red'}}>
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <div className='main'>
            <ul>
              <li style={{fontSize:'20px',fontWeight:'bold'}}>
              Sha<span style={{color:'wheat'}}>X00</span>
              </li>
              <li>
              <Link to='/read' className='deco'>Read</Link>

              </li>
              <li>
                <Link to='/insert' className='deco'>Insert</Link>
              </li>
               <li>
                <Link to='/pro' className='deco'>products</Link>

              </li>
               <li>
              <Link to='/shop' className='deco'>shopping cart</Link>
              </li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Header

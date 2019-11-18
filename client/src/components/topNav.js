import React from 'react'
import Logo from '../assets/logo.svg'

function topNav() {
    return (
        <nav>
  <div className="nav-wrapper" style={{backgroundColor:`white`}}>
    <a href="#!" className="brand-logo"><img  src={Logo} className="brand_logo"/><span className="brand_name">Intugine</span></a>
    

    <ul className="right hide-on-med-and-down">
      <li className="active"><a href="#" className="topnav_link">Home</a></li>
      <li><a href="#" className="topnav_link">Brands</a></li>
      <li><a href="#" className="topnav_link">Transporters</a></li>
      
      {/* <li><a href="badges.html">Components</a></li> */}
      <li><a className="dropdown-trigger" href="#!" data-target="dropdown1" style={{color:`black`}}>
      <svg className="topnav_profile" xmlns="http://www.w3.org/2000/svg" width="27.346" height="26.044" viewBox="0 0 27.346 26.044">
  <g id="profile" transform="translate(0 -13.415)">
    <path id="Path_27" data-name="Path 27" d="M137.306,28.031a7.308,7.308,0,1,0-7.319-7.319A7.321,7.321,0,0,0,137.306,28.031Zm0-12.708a5.388,5.388,0,1,1-5.388,5.388A5.4,5.4,0,0,1,137.306,15.323Z" transform="translate(-123.678 0)" fill="#2e384d"/>
    <path id="Path_28" data-name="Path 28" d="M.965,351.074H26.381a.958.958,0,0,0,.965-.965,9.194,9.194,0,0,0-9.183-9.183H9.183A9.194,9.194,0,0,0,0,350.109.958.958,0,0,0,.965,351.074Zm8.217-8.217h8.981a7.247,7.247,0,0,1,7.185,6.286H2A7.267,7.267,0,0,1,9.183,342.857Z" transform="translate(0 -311.615)" fill="#2e384d"/>
  </g>
</svg>

          <i className="material-icons right topnav_arrow">keyboard_arrow_down</i></a></li>
    </ul>
  </div>
</nav>
    )
}

export default topNav

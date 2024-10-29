import React from 'react'
import Popular from '../Popular/Popular'
import Toprated from '../Toprated/Toprated'
import Upcoming from '../Upcoming/Upcoming'
import { Link  } from "react-router-dom";
import "./Header.css"
function Header() {
  return (
    <div className='header-div'>
      <h2 className='title-header'>Header</h2>
      <div className='mana'>
      <Link className='link' to={"/popular"}>Popular</Link><br />
      <Link className='link' to={"/toprated"}>Toprated</Link><br />
      <Link className='link' to={"/upcoming"}>Upcoming</Link>
      </div>
    </div>
  )
}

export default Header

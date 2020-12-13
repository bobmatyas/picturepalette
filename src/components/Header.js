import React from 'react';
import { Link } from 'react-router-dom'
import '../sass/header.scss'
import { MdSearch } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

function Header() {

return (

<header className="navigation-container">
      
<div>
  <h1 className="logo"><Link to="/">Picture<span className="logo2">Palette</span></Link></h1>
</div>

<nav>
  <ul className="navigation-menu">
  <li>
      <Link to="/">             
        <span style={{fontSize: 24+'px'}}>
          <MdSearch />
        </span>
        search  
      </Link>
    </li>
    <li>
      <Link to="/favorites" >             
        <span style={{fontSize: 24+'px'}}>
          <MdFavoriteBorder />
        </span>
        favorites   
      </Link>
    </li>
  </ul>
</nav>
</header>
);
}

export default Header;
import React from 'react';
import '../sass/header.scss'
import { MdSearch } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

function Header() {

return (
<header className="navigation-container">
      
<div>
  <h1 className="logo"><a href="./">Picture<span className="logo2">Palette</span></a></h1>
</div>

<nav>
  <ul className="navigation-menu">
  <li>
      <a href="/" >             
        <span style={{fontSize: 24+'px'}}>
          <MdSearch />
        </span>
        search  
      </a>
    </li>
    <li>
      <a href="#!/favorites" >             
        <span style={{fontSize: 24+'px'}}>
          <MdFavoriteBorder />
        </span>
        favorites   
      </a>
    </li>
  </ul>
</nav>
</header>
);
}

export default Header;
import React from 'react';
import '../sass/header.scss'

function Header() {

return (
<header className="navigation-container">
      
<div>
  <h1 className="logo"><a href="./">Picture<span className="logo2">Palette</span></a></h1>
</div>

<nav>
  <ul className="navigation-menu">
    <li>
      <a href="#!/favorites">             
        <i className="material-icons">
            favorite_border
        </i>
        favorites   
      </a>
    </li>
  </ul>
</nav>
</header>
);
}

export default Header;
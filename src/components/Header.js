import React from 'react';
import '../sass/header.scss'

function Header() {

return (
<header class="navigation-container">
      
<div>
  <h1 class="logo"><a href="#">Picture<span class="logo2">Palette</span></a></h1>
</div>

<nav>
  <ul class="navigation-menu">
    <li>
      <a href="#!/favorites">             
        <i class="material-icons">
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
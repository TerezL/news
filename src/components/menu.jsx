import React from "react";
import Logo from "./images/logo.svg"

function Menu(){
    return(
<>
<div class="container">
<nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={Logo} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <div class="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <a class="nav-link" href="#">Home</a>
        <a class="nav-link" href="#">New</a>
        <a class="nav-link" href="#">Popular</a>
        <a class="nav-link" href="#">Trending</a>
        <a class="nav-link" href="#">Categories</a>
      </div>
    </div>
  </div>
</nav>
   </div>       
</>)
}

export default Menu;
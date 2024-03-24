import React from "react"

const NavbarDashboard = () => {
    let URL = 'http://localhost:3000';
    return (
  <>
  <nav class="navbar navbar-expand-lg navbar-light shadow">
    <a class="navbar-brand" href="#">HMS Dashboard</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href={`${URL}/dashboard/add-patient`}>Add Patient <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href={`${URL}/dashboard/admit-patient`} >Admit</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href={`${URL}`} >Logout</a>
        </li>
  
      </ul>
    </div>
  </nav>
  </>
    )
};

export default NavbarDashboard;

import React from 'react';
import './App.css';


function Header(src) {
    return (
      <div className="tweet">
          <div class="card-header animated-bg" id="header">&nbsp;</div>
            <img className="img-responsive" src={"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"} alt="logo"/>
      </div>
    )
  }


export default Header;
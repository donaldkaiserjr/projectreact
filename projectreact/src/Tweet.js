import React from 'react';
import './App.css';


function Tweet({name, message}){
    return(
        <div className="tweet">
            <div className="card-header animated-bg" id="header">&nbsp;</div>
            <img src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="second" />
                <h3>{name}</h3>
                <p className="card-excerpt">{message}</p>
                <h3 className="likes">Number of likes</h3>
        </div>
      
    )
}

export default Tweet;



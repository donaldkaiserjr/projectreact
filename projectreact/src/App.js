import React, {useState} from 'react';
import Tweet from './Tweet';


//Terminal:  create-react-app projectreact  to create folder for project
// Terminal:  npm start    THIS OPENS THE LIVE DEVELOPMENT SERVER


function App() {

  const [users] = useState([
    {name: 'Foodie 800', message: "Today we're making lobster"}, 
    {name: 'TimTheDriver', message: 'Why drivers dislike Uber'},
    {name: 'RealBruno', message: 'Bruno Mars Tickets on sale tomorrow!'},  
  ]);


  return (
    <div className='app'>
      <div className="container-1">
        {users.map(user => (
          <Tweet name={user.name} message={user.message}/>
        ))}
      </div>
    </div>
  );
  }
  

export default App;
import React, {useState} from 'react';
import Tweet from './Tweet';


//Terminal:  create-react-app projectreact  to create folder for project
// Terminal:  npm start    THIS OPENS THE LIVE DEVELOPMENT SERVER


function App() {


  const [users] = useState([
    {name: 'Ed', message: 'Hello There'}, 
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
  
//   return(
//     <div className='app'>
//       <Tweet name="Deve Ed" message="This is a random tweet" />
//       <Tweet name="John Snow" message="I am the true King of EVERYTHING!"/>
//       <Tweet name="Traversy Media" message="Whew daddy!"/>
//       <Tweet name="Mosh" message="What the fuck is Amazon up to now!"/>
//     </div>
//   )
// }

export default App;
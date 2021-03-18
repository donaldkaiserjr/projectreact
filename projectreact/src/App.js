import React, {useState} from 'react';
import Tweet from './Tweet';


function App() {

  const [users, setUsers] = useState([
    {name: 'Ed', message: 'Hello There'}, 
    {name: 'John', message: 'I am John Snow'}, 
    {name: 'Traversy', message: 'Goulash'},
    {name: 'Bobo TheClown', message: 'What in the hamhock is going on. I cant believe this'},  
  ]);


  return (
    <div className='app'>
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
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
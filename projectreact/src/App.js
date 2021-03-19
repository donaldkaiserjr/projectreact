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
 
export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}


function Counter(){
  const [ count , setCount] = useState(0) ;
  const incrementValue = () => setCount(count + 1);
  
  // const incrementValue = () =>{
  //   const newCountValue = count + 1 ;
  //   setCount(newCountValue);
  // }

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={incrementValue} >Click Me</button>
    </div>
  )
}




function Users(props){
  const [users, setUsers] = useState([]) ;
  useEffect( ()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  } , [])
  
  return (
    <div>
      <h4>Length : {users.length}</h4>
      {
        users.map(user => <ShowData name={user.name}></ShowData>)
      }
    </div>
  )
}

const ShowData =(props)=>{
  return (
    <div>
        <h4>Name : {props.name}</h4>
        <h2>test</h2>
    </div>
  )
}

export default App;

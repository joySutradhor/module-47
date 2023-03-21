import logo from './logo.svg';
import './App.css';

const dream = { first: "Best Developer", second: "Need publicity", third:"Happy life lead with family " }

const design = {
  color: "#efc5b5"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <p>Hello My Dream . Can i succes in my Life</p>
          <Person name="joy Sutradhor" country ="Bangladesh"></Person>
        </div>
        <div className="myDream">
          <p style={design}>First : {dream.first}</p>
          <p>Second : {dream.second}</p>
          <p style={{color:"#aaffaa", backgroundColor: "black" , padding:"10px"}}>Third : {dream.third}</p>
          <Friend name = "Rakib" age ="25" town="tangail" job="developer"></Friend>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Person (Props){
  return (
    <div>
        <h1>My Name is {Props.name}.</h1> 
        <h1>I will best devoloper is {Props.country}.</h1>
    </div>
  )
}

function Friend(Props) {
  const names = [{nam : "joy Sutradhor", age : 30}, {nam:"jon Sutradhor", age : 22}, {nam : "motu Sutradhor " , age: 1005}]

  return(
    <div>
        {
          names.map(name => <Family name = {name.nam} age = {name.age}></Family>)
        }
        <h3>He is my Friend {Props.name} and age is {Props.age}.</h3>
        <h3>His home town is {Props.town} .His passion is {Props.job}.</h3>
    </div>
  )
}


function Family(Props){
  return(
    <div>
      <h4>My name is {Props.name} and My age is {Props.age} .</h4>
    </div>
  )
}

export default App;

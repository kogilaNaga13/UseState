import logo from './logo.svg';
import './App.css';
import UseStae from './UseState';
import Object from  './Object';

function App() {
  const employee=[

    {
    name:"Aarani",
    skills:[
    {name:"ReactJS", type:"Frontend"},
    {name:"nodeJS", type:"Backend"}
    ]
    
    },
    {
    name:"kogila",
    skills:[
    {name:"Angular", type:"Frontend"},
    {name:"Python", type:"Backend"}
    ]
    
    }
    
    
    ]
  
  return (
    <div className="App">
      <UseStae/>
      <Object res = {employee}/>
    </div>
  );
}

export default App;
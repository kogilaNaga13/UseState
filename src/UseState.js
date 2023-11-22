import {useState} from 'react'

const UseState = () => {
  const[count,setCount]=useState("Blue")
  const change=()=>{
      setCount("Red")
  } 
  return (
    <div className="content">
        <div className="details">
                <p>value:{count}</p>
                <button onClick={change}>change</button>
          </div>
      </div>
  );

}
export default UseState;
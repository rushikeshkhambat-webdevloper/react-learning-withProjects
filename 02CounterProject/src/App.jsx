import { useState } from 'react'

// in this counter project wi will gonna learn about hooks and one of its type 
function App() {
    // here we are using hooks: they are the react function used by the componential func to change and update the state and so many thingh 
    // we are using usestate function here 
    let [Counter,setcounter]=useState(15)// here we useed usestate hook of react it is used to update the values and state or change it 
    // when we used it we req two things one is variable and another is method and at we intalize the counter with 15 
    // now we have onlclick method used 
    function addvalue(){
      Counter=Counter+1;
      setcounter(Counter)// we define the function to add the values 
    }
    function removevalue(){
      Counter=Counter-1;
      setcounter(Counter)// we define the funtion two remove the values 
    }
// we as do this using hooks usestate hooks which is used to change the state of the numbers 

  return (
    <>
      <h1>Chai aur React: with Counter game </h1>
      <h2> Counter value:{Counter}</h2>
      <button onClick={addvalue}>Add value {Counter}</button>
      <br />
      <br />
      <button onClick={removevalue}> Remove value{Counter}</button>
    </>
  )
}

export default App

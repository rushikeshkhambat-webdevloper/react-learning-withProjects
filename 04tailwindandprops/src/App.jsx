import { useState } from 'react'
import "tailwindcss";
import Card from './components/card';


function App() {
  const [count, setCount] = useState(0)
  let myobj={
    age:20,
  }

  return (
    // now we wil se taiwind css here we have class name the way used class in html same we used class in tailwind tailwind is and framework of css 

    <>
     <Card name="Rushikesh" age={myobj.age}/>
    </>
  )
}

export default App

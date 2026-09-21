import { useState } from 'react'
import './index.css'
import "tailwindcss";

function App() {
  let [color, setcolor] = useState("olive")
  // we are making a small project the name of the project is bg color changer we will have a menue bar with multiple colors and if we click on any of 
  // that color the bgc will change according to that color 
  // we are using hooks in in this usestate 
  // we are using onclick method on the button onclikc is the method dont need the return valuue form the function it needs a call bakc function to perform 
  // any task 
  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'></div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl '>
      <button onClick={ ()=>setcolor("red")} 
     className="outline-none px-4 py-1 rounded-full bg-red-500 text-white" 
      >Red</button>
       <button onClick={ ()=>setcolor("green")} 
     className="outline-none px-4 py-1 rounded-full bg-green-500 text-white" 
      >Green</button>
       <button onClick={ ()=>setcolor("black")} 
     className="outline-none px-4 py-1 rounded-full bg-black text-white" 
      >Black</button>
       <button onClick={ ()=>setcolor("Yellow")} 
     className="outline-none px-4 py-1 rounded-full bg-yellow-500 text-white" 
      >Yellow</button>
       <button onClick={ ()=>setcolor("blue")} 
     className="outline-none px-4 py-1 rounded-full bg-blue-500 text-white" 
      >Blue</button>
      </div>
          <h1  style={{textAlign:'center', color:'skyblue'}}> Hello welcom to the project  click on the button and see the magic </h1>
      </div>
    </>
  )
}

export default App

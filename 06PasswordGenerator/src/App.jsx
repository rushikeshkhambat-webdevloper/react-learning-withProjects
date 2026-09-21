import { useState,useCallback,useEffect,useRef } from 'react'
import "tailwindcss";
import './App.css'
// project: Passwourd generator the project wil generate the random password user wll have length to optimis the passwroud user can add number in the 
// pass then char in the pass while making this project we will learn som new hooks and so many things 
function App() {
// now lets create some variables for our project 
// with usestate hook
const [length,setlength]=useState(8);// at start we will state length of the pass to 8 and later we will gonna change the state so we used usestate 
const[numallowed,setnumallowed]=useState(false);
const[charallowed,setcharallowed]=useState(false);
const[pass,setpass]=useState(""); // at intialize state there is nothing in the pass so we will not assing any value to pass 
//now first create a random pass for our project 
const passwordRef=useRef(null)// we use useref hook to get the ref or the value we need to copy 
 const passwordGenerator=useCallback(
  () => {
    // useCallback is the hook which is used to memorize this function again instead of running this again while we refresh the page 
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"// we will going to used this char to make our pass
    if(numallowed) str+="0123456789"// if number is allowed to our pass we will used them 
    if(charallowed) str+="@#$%&*~`.,"// if char is allowed to our pass we will usde this 
    // now lets genearte the pass we will generate it every time when user refresh it and or click on the length to increase it our clicked on 
    // nums or char 
    for (let i = 0; i<=length; i++){
      let char= Math.floor(Math.random()*str.length)// we create the number or character thate will be in our pass
      pass+=str.charAt(char);         
    } setpass(pass);
  },[length,numallowed,charallowed,setpass]// now this caall back is have some dependency means the value which are or will change 
 )
 const copypasswordtoclipboard=useCallback(()=>{
    navigator.clipboard.writeText(pass);
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);
  
 },[pass])
 // to used usecall back we need one another hook useEffect whenever the page reload using useEffect we will run the passwordgenerator agian one time 
 useEffect(() => {
  passwordGenerator();
 }, [length,numallowed,charallowed,setpass])// it alos depends on dependency whenever there will be change in any depedency it will reload the funciton 
 // again 


  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-400'> 
   <h1 className='text-white text-center my-3 text-4xl '>Password Generator </h1>
   <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
    <input type="text"
    value={pass}
    className='outline-none w-full py-1 px-3 '
    placeholder='pass'
    readOnly
    ref={passwordRef}
   />
   <button onClick={copypasswordtoclipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy
   </button>
   </div>
   <div  className='flex text-sm gap-x-2'>
    <div className=' flex items-center gap-x-1 '>
    <input type="range"
    min={6}
    max={100}
    value={length}
    className='cursor-pointer'
    onChange={(e)=> setlength(e.target.value)} />
   </div>
   <label> length:{length}</label>
   </div>
   <div  className='flex text-sm gap-x-2'>
    <div className=' flex items-center gap-x-1 '>
    <input type="checkbox"
     defaultChecked={numallowed}
     id='numberInput'
     onChange={()=>{
      setnumallowed((prev)=>!prev);
     }
    }
    />
   </div>
   <label htmlFor=" numberInput">Numbers</label>
   </div>
   <div  className='flex text-sm gap-x-2'>
    <div className=' flex items-center gap-x-1 '>
    <input type="checkbox"
     defaultChecked={charallowed}
     id='characterInput'
     onChange={()=>{
      setcharallowed((prev)=>!prev);
     }
    }
    />
   </div>
   <label htmlFor=" characterInput">Characters</label>
   </div>

   
   </div>
  )
}

export default App

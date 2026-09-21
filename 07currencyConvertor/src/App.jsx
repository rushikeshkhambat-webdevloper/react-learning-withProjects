import { useState } from 'react'
import "tailwindcss";
import  usecurrencyinfo from './hooks/useCurrencyinfo'
import {InputBox} from'./components'

function App() {
  const [amount, setAmount] = useState(0)
  // now we are changing the state of usd and inr too and and also amount that is converted we will also 
  // see thaat the change of its will also take place there 
  const[from,setFrom]=useState("usd")
  const[to,setTo]=useState("inr")
  const[convertedAmount,setConvertedAmount]=useState(0);
  // now we need to show currency info to our useer 
  const currencyInfo= usecurrencyinfo(from)// we will get the data that we fetch 
  // and we need keys of that data 
  const options= Object.keys(currencyInfo)
  // and we aslo have and swap burtton there to swap the currnecy 
  // so lets do swpping 
  const swap=()=>{
    setFrom(to)// we pas inr here 
    setTo(from)// we pas usd here 
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  // now we need to convert the value so we need to multiply it when user click on the 
  // convet inr to usd 
  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://media.istockphoto.com/id/1465618017/photo/businessmen-investor-think-before-buying-stock-market-investment-using-smartphone-to-analyze.jpg?s=2048x2048&w=is&k=20&c=ocYlO-ILbQNIpV70O32Ja3P4kMLi9_Yj-78Xrf-Y6L8=')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={from}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}
  
export default App

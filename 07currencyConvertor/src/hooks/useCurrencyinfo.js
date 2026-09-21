import { useEffect, useState } from "react";
 
function usecurrencyinfo(rates){
    // here we are crating our own custom hook for our project and taiking the 
    // cuurency as a argument for it 
    // now we are taking the data of usd and inr so the state will change so we will 
    // used useSatate hook 
    const[data,setdata]=useState({})// it should not crash we if we not get data so 
    // we used empty object 
    // now we are making api call so we will used useEffect hook to make api call 
    useEffect(() => {
        // now we need to fetch the data for our project means we need to make the api call
       fetch(`https://open.er-api.com/v6/latest/${rates}`)// we will used curency as a args and dependicy also 
       // need to convert data form string to json
       .then((response)=>response.json())// data is converted into json now 
       .then((response)=>setdata(response.rates))
       console.log(data);
       // we store that string format data in response variable then convet it into json so to take the key value of that data we used setdata in that we axix the key value using square barcket way 
    }, [rates])// if our dependency changes means our currncy changes then form usd to inr then we will agian fetch the data 
    return data;
}
export default usecurrencyinfo;
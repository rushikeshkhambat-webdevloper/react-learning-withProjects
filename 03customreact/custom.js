// here we will going to create our own react libraary means how react convert the function we had exported as a new el in to treee and how it render it 
// here we have to inject it in our div name id=root 

 function customreact(reactelement,container){
    // now first lets create the element using dom 
    const domel=document.createElement(reactelement.type)// now here this line stays that we had created the react el using dom with the help of the reactel object 
    // here we will used more optimal way to do it 
    domel.innerHTML=reactelement.Children;
    // now to set the attribute we will used forin loop 
    for (const prop in reactelement.props) {// this statement in the parenthesis stays that go in the properties of objecte props 
        if(prop==='Children')continue;// if we get this just continue 
        domel.setAttribute(prop, reactelement.props[prop]);// we have to attribute href and target both will we set as per its value  
    }
    // now lets inject this to maincontainer 
    container.appendChild(domel);
}

// create newelmeent as per react do 
// this is how react create el in the back when we return the el in the jsx  
const reactelement={
    type:'a',// herre we are creating an anchor tag for links 
    props:{// here props is an object we created to its the properyty of the anchor tag properties we can say they are key 
        href:"https://google.com",
        target:'_blank'
    },
    Children: "Click to visit the google"
}
const maincontainer=document.getElementById("root")
// now we to perform the task we need to call the function 
customreact(reactelement, maincontainer)// here we pass the el we want to inject and where we want to enject 
function Card({name,age}){
  // in this we are going to understand the props : properties  they are used to pas the data from parent to chil now card.jsx is child and we are passing data from app.jsx which is our parent 
    return(
        <>
          <h1> Helooo {name} {age}</h1>
        </>
    )
}

export default Card
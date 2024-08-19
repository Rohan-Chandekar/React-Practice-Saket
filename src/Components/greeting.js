// function Greetings (){
//   // return <h1 style={{color:"red"}}>Hello React</h1>
//   return <h1 class="decoration">Hello React</h1>
// }

// export default Greetings 

function Greetings (props){
  // return <h1 style={{color:"red"}}>Hello React</h1>
  return <h1 class="decoration">Hello, {props.name}</h1>
}

export default Greetings 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Singer from './Singer/Singer'

function App() {
  const [count, setCount] = useState(0)

  const singer =[
    {
      Name:'Hero Alom', Age:14, Location:"Bogura"
    },
    {
      Name:'Hero Alom', Age:24, Location:"Bogura"
    },
    {
      Name:'Hero Alom', Age:34, Location:"Bogura"
    },
    {
      Name:'Hero Alom', Age:44, Location:"Bogura"
    },
    {
      Name:'Hero Alom', Age:54, Location:"Bogura"
    }
  ]

  return (
    <>

     {
      singer.map(singerName =><Singer  singers={singerName}></Singer>)
     }


    
      
      <h1>Vite + React</h1>
      <Todo task="is Done" isDone={true}  ></Todo>
      
     

<Person></Person>
<Product name="Dipu" age="66" Qualification="diploma in agriculture"></Product>

    </>
    
  )

  
}

function Person(){
  const age= 23;
  const height = 5;
  const person = {
    name:'Dipu Kumar Biswas',
    location:"HatGopal Pur",
    velage : "Khulul Berbari"
  }
  return <h1 className='person'>Hello Developer. My Name{person.name}. I am {age} Years Old.My Height {height}</h1>
}

function Product (props){
  const {name, Qualification, age} = props;
  return (
    <div>
      <p>My Product is:{name} </p>
    <p>My age is : {age} </p>
    <p>My Aducation is : {Qualification}</p>
    </div>
  )

}


export default App

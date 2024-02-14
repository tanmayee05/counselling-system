import React from 'react'
import Hello from './Hello'
import Great from './Great'
import Message from './Message'
import Counter from './Counter'
import Productlist from './Productlist'
import TodoList from './TodoList'
import DataFetch from './DataFetch'
import ProductCard from './ProductCard'
import Product from './Product'
import FetchRegistration from './FetchRegistration'




const Home = () => {
  return (
    <div>
      
      <DataFetch/>
      {/*<Product/>
      
      <ProductCard/>
      <Message/>
      <Counter/>
      
   <Hello name='tanmayee' id= '253'>
      <p>this from section </p>
    </Hello>
    <Hello name='pravigna' id= '255'>

    </Hello>

  <Great name='sai anna' id='247'/>

    </div>
  )
}



const products = [
  { id: 1, name: 'Product 1', price: 20 },
  { id: 2, name: 'Product 2', price: 30 },
  { id: 3, name: 'Product 3', price: 100 },
  { id: 4, name: 'Product 4', price: 10 },
  // Add more products as needed
];

const todos = [
  { title: 'Learn React', completed: false },
  { title: 'Clean the room', completed: true },
  { title: 'Complete the project', completed: false },
];


const Home = () => {
  return (
    <div><center>
      <Productlist products={products} />
    <TodoList todos={todos} /> {/* Include the Todolist component with todos 

  </center>*/}
    </div>
  )
}



export default Home
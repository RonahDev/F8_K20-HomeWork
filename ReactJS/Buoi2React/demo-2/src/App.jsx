import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard';

export default function App() {
 const products = [
  {
    id : 1, 
    name : "Iphone"
  },
  {
    id : 2,
    name : "Samsung"
  },
  {
    id : 3,
    name : "Oppo"
  }
 ]
  return (
    <>
      <ul>
        {
          products.map(product => (
            <li key={product.id}>
              {product.name}
            </li>
          ))
        }
      </ul>
    </>
  )
}

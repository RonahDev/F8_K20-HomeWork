import React from 'react'

export default function Card({ children}) {
  return (
    <d div style ={{border: '1px solid #ccc',
     padding: '16px', 
     borderRadius: '8px'}}>
     {children} 
    </div>
  )
}

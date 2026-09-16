import {  Outlet } from 'react-router-dom'

import React from 'react'

export default function DefaultLayout() {
  return (
    <>
     <h1>Header</h1> 

     <Outlet /> //Chỗ này sẽ hiển thị ra các component con của DefaultLayout, ví dụ như Home, News, Contact

     <h1>Footer</h1>
    </>
  )
}

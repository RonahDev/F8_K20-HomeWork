import React from 'react'
import { Outlet } from 'react-router'

export default function index() {
  return (
    <>
      <header>Header</header>

      
      <Outlet />

      <footer>Footer</footer>
    </>
  )
}

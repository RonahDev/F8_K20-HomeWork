// import React,{useActionState, useState} from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import MyNavbar from "./component/myNavbar";
// import Button from "react-bootstrap/Button";

// export default function App(){
//   // var count=0;

//   // const [count, setCount] =useState(10);

//   return(
//     <>
//       <MyNavbar/>

//       {/*
//       <div>App</div>

//       <button onClick={()=>{
//         //count++
//         setCount(count => count + 1);
//         console.log(count)
//       }}>
//         +
//       </button>

//       <h2>Count: {count}</h2>

//       <button>-</button>
//       */}
//     </>
//   )
// }


// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from './assets/vite.svg'
// // import heroImg from './assets/hero.png'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <section id="center">
// //         <div className="hero">
// //           <img src={heroImg} className="base" width="170" height="179" alt="" />
// //           <img src={reactLogo} className="framework" alt="React logo" />
// //           <img src={viteLogo} className="vite" alt="Vite logo" />
// //         </div>

// //         <div>
// //           <h1>Get started</h1>

// //           <p>
// //             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
// //           </p>
// //         </div>

// //         <button
// //           type="button"
// //           className="counter"
// //           onClick={() => setCount((count) => count + 1)}
// //         >
// //           Count is {count}
// //         </button>
// //       </section>

// //       <div className="ticks"></div>

// //       <section id="next-steps">
// //         <div id="docs">

// //           <svg className="icon" role="presentation" aria-hidden="true">
// //             <use href="/icons.svg#documentation-icon"></use>
// //           </svg>

// //           <h2>Documentation</h2>

// //           <p>Your questions, answered</p>

// //           <ul>
// //             <li>
// //               <a href="https://vite.dev/" target="_blank">
// //                 <img className="logo" src={viteLogo} alt="" />
// //                 Explore Vite
// //               </a>
// //             </li>

// //             <li>
// //               <a href="https://react.dev/" target="_blank">
// //                 <img className="button-icon" src={reactLogo} alt="" />
// //                 Learn more
// //               </a>
// //             </li>
// //           </ul>
// //         </div>

// //         <div id="social">

// //           <svg className="icon" role="presentation" aria-hidden="true">
// //             <use href="/icons.svg#social-icon"></use>
// //           </svg>

// //           <h2>Connect with us</h2>

// //           <p>Join the Vite community</p>

// //           <ul>
// //             <li>
// //               <a href="https://github.com/vitejs/vite" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#github-icon"></use>
// //                 </svg>

// //                 GitHub
// //               </a>
// //             </li>

// //             <li>
// //               <a href="https://chat.vite.dev/" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#discord-icon"></use>
// //                 </svg>

// //                 Discord
// //               </a>
// //             </li>

// //             <li>
// //               <a href="https://x.com/vite_js" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#x-icon"></use>
// //                 </svg>

// //                 X.com
// //               </a>
// //             </li>

// //             <li>
// //               <a href="https://bsky.app/profile/vite.dev" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#bluesky-icon"></use>
// //                 </svg>

// //                 Bluesky
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //       </section>

// //       <div className="ticks"></div>

// //       <section id="spacer"></section>
// //     </>
// //   )
// // }

// // export default App

// // import React from "react";

// // export default function App(){

// //   const data = [
// //     {
// //       id: '1',
// //       name: 'Miu Le',
// //       age: 30,
// //       image:
// //     },

// //     {
// //       id: '2',
// //       name: 'Chi Dan',
// //       age: 35,
// //       image:
// //     }
// //   ]

// // //PROPERTY: THUỘC TÍNH
// // //TRUYỀN THÔNG TIN GIỮA CÁC COMPONENT
// // //THÔNG QUA PROPERTY

// //   return(
// //     <>
// //       {data.map(item =>
// //         <h1 key={item.id}>
// //           {item.name} - {item.age}
// //         </h1>
// //       )}
// //     </>
// //   )
// // }

import React from "react";
import { Route, Routes } from "react-router";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Dashboard from "./pages/Dashboard";

// 1. Cài đặt REACT ROUTER :
// npm install react-router-dom  (phiên bản cũ)
// npm install react-router      (phiên bản mới)
//2 . Cấu hình Router
// Bao app trong <BrowserRouter>
//3. Tạo ra các Route
// vd muốn vào trang home.jsx
// thì gõ localhost:5173/home => Home.jsx
//NESTED ROUTE :
// /dashboard/settings 
//LƯU Ý : Phần PATH của Route Con
// Không được có dấu / ở đầu
// Để hiển thị được nội dung của route con 
// thì trong route cha phải có thẻ <Outlet />
export default function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}
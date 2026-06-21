import React from 'react'

export default function App() {
  return (
    <div>
      
    </div>
  )
}


// import React from 'react'

// export default function App() {
//   return (
//     <>
//       App
//     </>
//   )
// }


// // import React, { useEffect, useState } from 'react'

// // export default function App() {
// //   //BACKEND - JSON -  FRONTEND
// //   // => có cách nào chế ra backend test frontend hay kh ??
// //   // 1. MOCKAPI
// //   // 2. JSON SERVER
// //   // Cài đặt  : npm i -g json-server
// //   // giả lập dữ liệu backend trả về bằng file json
// //   // Chạy JSON-SERVER : json-server TENFILE.JSON data.json

// //   // CALL API : đi vào endpoint localhost:3000/j97
// //   //lấy dữ liệu và hiển thị lên màn hình

// //   const [data , setData] = useState([]);
// //   //HOOK : useEffect
// //   //Cú pháp : useEffect(() => { }, [])
// //   //Ý nghĩa : Hàm bên trong useEffect sẽ được chạy 
// //   //Khi mảng phụ thuộc Dependency thay đổi
// //   //Hàm gọi API
// //   //nếu dependency là mảng rỗng []
// //   //thì hàm bên trong useEffect sẽ chỉ chạy một lần
// //   useEffect(() => {
// //       const fetchData = () => {
// //     fetch('http://localhost:3000/j97')
// //     //FETCH trả về 1 response , Sau đó chuyển thành JSON
// //     .then(response => response.json())
// //     //data : DỮ LIỆU SAU KHI CHUYỂN THÀNH JSON , Lưu thông tin vào State
// //     //ngoài fet thì còn thư viện axios
// //     .then(data => setData(data))
// //   }
// //   fetchData();
// //   }, [])

  
// //   return (
// //     <>
      
// //     </>
// //   )
// // }


// // // import React from 'react'
// // // import { Route, Routes } from 'react-router'
// // // import Home from './pages/Home'
// // // import Product from './pages/Product'
// // // import Dashboard from './pages/Dashboard'
// // // import Setting from './pages/Setting'
// // // import MyNavBar from './component/MyNavBar'
// // // import { useParams } from 'react-router'

// // // export default function App() {
// // //   //1. cai dat react router
// // //   //lenh: npm install react-router-dom
// // //   //v6
// // //   //npm install react router
// // //   //2. cau hinh router
// // //   //vao main.jsx bao APP trong <BrowserRouter></BrowserRouter>
// // //   //3. tao ra cac router
// // //   //VD muon vao trang home.jsx
// // //   //thi go localhost:5173/home => Home.jsx
// // //   //nested route
// // //   // /dashboard/settings
// // //   //luu y phan path cua route con khong dc co dau / o dau
// // //   // de hien thi dc noi dung cua route con thi trong route cha phai co the <Outlet></Outlet>
// // //   //layout route
// // //   // /admin => AdminLayout
// // //   // /home => HomeLayout
// // //   //giong nested route, nhung route cha
// // //   //ko co thuoc tinh path
// // //   //Outlet dung de hien thi thong tin <outlet /> cua the con

// // //   //DYNAMIC SEGMENT:
// // //   // /product/:id => id dc truyen vao product.jsx



// // //   return (
// // //     <Routes>
// // //       <Route path="/dashboard" element={<Dashboard />} >
// // //         <Route path="setting" element={<Setting />} />
// // //       </Route>

// // //       <Route element={<MyNavBar />} >
// // //         <Route path="home" element={<Home />} />
// // //       </Route>


// // //       <Route path="/product/:id" element={<Product />} />
// // //       <Route path="*" element={<Home />} />
// // //     </Routes>
// // //   )
// // // }


















// // // // import React from 'react'

// // // // export default function App() {

// // // //   var a = 5;//hang so
// // // //   //can co co che cua react de biet dckhi naof
// // // //   //can render lai giao dien
// // // //   //hook:là các hàm đc viết sẳn để cung cấp
// // // //   //1 số thuộc tính nào đó
// // // //   //useState
// // // //   //cách dùng:
// // // //   //cách khai báo
// // // //   //useState() trả về một mảng gồm 2 phần tử: [x1, x2]
// // // //   //destructuring
// // // //   //x1: Biến lưu trữ và giá trị của State
// // // //   //State là những thứ có khả năng thay đổi trong component
// // // //   //x2 dùng để truy cập nhật giá trị cho state
// // // //   // input của useState: giá trị khởi tạo cho state đó
// // // //   const [count, setCount] = useState(10);
// // // //   return (
// // // //     <>
// // // //       <div>App</div>
// // // //       <button onclick={() => {
// // // //         //count++;
// // // //         setCount(count => count + 1);
// // // //         setCount(count => count + 1);
// // // //         console.log(count)
// // // //       }}>+</button>
// // // //       <h2>Count: {count}</h2>
// // // //       <button onclick={() => {
// // // //         //count--;
// // // //         setCount(count => count - 1);
// // // //       }}>-</button>
// // // //     </>
// // // //   )
// // // // }

// // // // // import React from 'react'
// // // // // import 'bootstrap/dist/css/bootstrap.min.css';
// // // // // import MyCard from '../component/MyCard';

// // // // // export default function App() {
// // // // //   const data = [{
// // // // //     name: 'Miu Lee',
// // // // //     age: 30,
// // // // //     image: 'https://4kwallpapers.com/images/wallpapers/one-piece-character-5120x2880-15328.jpeg'
// // // // //   },
// // // // //   {
// // // // //     name: 'chi dan',
// // // // //     age: 35,
// // // // //     image: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/12/best-dragon-ball-movies-on-crunchyroll.jpg'
// // // // //   }
// // // // //   ];
// // // // //   //property: thuộc tính
// // // // //   //truyen thong tin giua cac component voi nhau thong qua property
// // // // //   return (
// // // // //     <>
// // // // //       {data.map(item => <MyCard key={item.id} name={item.name} image={item.image} />)}
// // // // //     </>
// // // // //   )
// // // // // }





// // // // // // import React, { cloneElement } from 'react'

// // // // // // export default function App() {


// // // // // //   //thân hàm
// // // // // //   //code js
// // // // // //   //ECMASCRIPT: ES
// // // // // //   //khai bao bien: var, let, const
// // // // // //   //var: có thể khai báo lại, có thể gán lại, có thể sử dụng trước khi khai báo
// // // // // //   //let: không thể khai báo lại, có thể gán lại, không thể sử dụng trước khi khai báo
// // // // // //   //const: không thể khai báo lại, không thể gán lại, không thể sử dụng trước khi khai báo
// // // // // //   const a = 5;//hang so
// // // // // //   a = 6; //loi

// // // // // //   //Function: hàm
// // // // // //   function doSomething() {
// // // // // //     if (true) {
// // // // // //       var x = 10; //biến cục bộ
// // // // // //       let y = 20;
// // // // // //     }
// // // // // //     console.log(x); //10
// // // // // //     console.log(y); //loi
// // // // // //   }
// // // // // //   doSomething();

// // // // // //   const sum = (a, b) => a + b; //hàm mũi tên arrow function

// // // // // //   //ARRAY: mảng
// // // // // //   const arrayA = [1, 2, 3, 4, 5];

// // // // // //   const arrayB = ['An', 'Bình', 'Miu Lê', 'Chi Dân'];

// // // // // //   for (let i = 0; i < arrayA.length; i++) {
// // // // // //     console.log(arrayA[i]);
// // // // // //   }
// // // // // //   //map: Dùng để duyệt mảng nhưng sẽ copy và trả về một mảng mới
// // // // // //   arrayA.map(item => console.log(item));
// // // // // //   arrayA.sort((a, b) => a - b); //sắp xếp tang dần
// // // // // //   arrayA.sort((a, b) => b - a); //sắp xếp giảm dần
// // // // // //   const c = arrayA.sort((a, b) => a - b).map(item => item * 2); //sắp xếp tang dần và nhân đôi
// // // // // //   console.log(c);
// // // // // //   //đối với mảng chuỗi, cần bổ sung thêm hàm so sánh
// // // // // //   const d = arrayA.sort((a, b) => localcompare(a); //sắp xếp chuỗi giam dan
// // // // // //   console.log(d);
// // // // // //   //filter: dùng để lọc mảng và trả về một mảng mới
// // // // // //   //==: so sánh giá trị 
// // // // // //   //===: so sánh giá trị và kiểu dữ liệu
// // // // // //   const e = arrayA.filter(item => item % 2 === 0); //lọc ra các số chẵn
// // // // // //   console.log(e);
// // // // // //   const arrayC = [2, 3, 4]
// // // // // //   const [a1, a2] = arrayC;
// // // // // //   //destructuring: phân rã mảng
// // // // // //   const objectD = {
// // // // // //     name: 'Mui Lee',
// // // // // //     age: 30,
// // // // // //     address: 'nha tu trung uong'
// // // // // //   }
// // // // // //   const { name, age } = objectD; //destructuring: phân rã đối tượng
// // // // // //   console.log(name);
// // // // // //   console.log(age);



// // // // // //   return (
// // // // // //     <div>App</div>
// // // // // //   )
// // // // // // }



// // // // // // // import { Button } from 'react-bootstrap'
// // // // // // // import 'bootstrap/dist/css/bootstrap.min.css';
// // // // // // // import BasicExample from '../component/BasicExample';


// // // // // // // function App() {
// // // // // // //   //component
// // // // // // //   //2 cach goi
// // // // // // //   //có thể mở và đóng
// // // // // // //   // chỉ có thể tự động
// // // // // // //   //Bt:
// // // // // // //   //tạo 1 component hiển thị loading(Spinner của react- bootstrap)
// // // // // // //   //gọi component đó ở app.jsx
// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <BasicExample/>
// // // // // // //     </>
// // // // // // //   )
// // // // // // // }

// // // // // // // export default App;
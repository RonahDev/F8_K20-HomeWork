//Component là 1 hàm tar về giao diện
//dưới dạng jsx
//có 2 loại component
//1. class component

//snipet
// //ex muốn tạo 1 class component 
// import React, { Component } from 'react'

// export default class MyComponent extends Component {
//   render() {
//     return (
//       <div>MyComponent</div>
//     )
//   }
// }
// //Cau truc:
// phần 1 là import:
//phần 2 là hàm định nghĩa
//phần 3 return giao diện
//phần 4 export

//2. functional component
import React from 'react'

export default function MyComponent() {
  return (
    <div>MyComponent</div>
  )
}
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard(props) {
  console.log(props)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;

// export default MyComponent; 
//cau truc
//1. import
//2. ham dinh nghia
//3. return giao dien
//4. exxport co 2 cach
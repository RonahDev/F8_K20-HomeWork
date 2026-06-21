import React from 'react'
import { Link } from 'react-router'
import { useParams } from 'react-router'


export default function Product() {
    const data = [
        {
            id: "1",
            name: 'Hong Nhan'
        },
        {
            id: "2",
            name: 'Bac Phan'
        },
        {
            id: "3",
            name: 'Song Gio'
        }
    ]
    //lam sao de lay dc thong tin tu url
    //trinh duyet
    //localhost:5173/product/1
    //=> Hook useParams ()lay tham so
    //id tu url
    //desstructuring
    const { id } = useParams();
    console.log(id)
    const j97 = data.find(item => item.id === id);
    console.log(j97)

    return (
        <>
            <div>Product</div>
            {/* <a href="/home">
                go to home page
            </a> */}
            <h2>{j97.name}</h2 >
            <Link to="/home">
                go to home page
            </Link>
        </>
    )
}
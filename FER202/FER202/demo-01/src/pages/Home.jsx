import React from 'react'
import { Link, useParams } from 'react-router'


export default function Home() {


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
    //LITERAL STRING

    return (
        <>
            {data.map(item =>
                <Link to={`/product/${item.id}`}>
                    <div>{item.id} - {item.name}</div>
                </Link>
            )}
        </>
    )
}





// import React from 'react'
// import { Link } from 'react-router'
// export default function Home() {
//     return (
//         <>
//             <div>Home</div>
//             {/* <a href="/product">
//                 go to product page
//             </a> */}
//             <Link to="/product">
//                 go to product page
//             </Link>
//         </>
//     )
// }
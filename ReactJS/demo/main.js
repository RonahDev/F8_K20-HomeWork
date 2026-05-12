// DOM thật (Real DOM)
// Cách tạo Element node : document.createElement()
// - Properties : id, value, className , title, ...

// DOM ảo (Virtual DOM)
// Cách tạo React Element : React.createElement()


//React : tạo h1 element
const h1 = React.createElement(
    "h1" ,
    {
        id: "heading",
        className : "small-heading" ,
        title : "Đây là thẻ h1" ,
        // ...
    },
    React.createElement("i", {key : 1} , React.createElement("strong" , null , "Xin ")),
    React.createElement("span" , {key : 2} ,"chàoo!!")
);

// ReactDOM : Render h1 ra UI
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(h1);

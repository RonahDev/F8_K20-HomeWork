// Cách 1 : Cách này sẽ tạo ra phần tử list sau đó tạo ra h1 và ul sẽ là con trực tiếp của h1 và li sẽ là con trực tiếp của ul
const list = React.createElement(
        "h1" , null , "Todo List" ,
        React.createElement(
        "ul" , 
        {
            id : "tasks-list"
        } ,
        React.createElement(
            "li" , 
            {
                className : "task-item active"
            },
            "Task 1"
        ),
        React.createElement(
            "li",
            {
                className : "task-item completed"
            },
            "Task 2"
        ),
        React.createElement(
            "li",
            {
                className : "task-item"
            },
            "Task 3"
        )
    )
    
)

//Cách 2 : Cách này sẽ tạo ra 2 phần tử h1 và ul riêng biệt , kh để ul là con trực tiếp của h1 nữa
const h1 = React.createElement("h1" , null , "Todo List");
const ul = React.createElement("ul",
    {
        id : "tasks-list"
    },
    React.createElement("li",
        {
            className : "task-item active"
        },
        "Task 1"
    ),
    React.createElement("li",
        {
            className : "task-item completed"
        },
        "Task 2"
    ),
    React.createElement("li",
        {
            className : "task-item"
        },
        "Task 3"
    )
)

// //Render cách 1
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(list);

// //Render cách 2
// const div = React.createElement("div" , null , h1 , ul);

// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(div);

//Render cách 3 
const app = React.createElement(React.Fragment , null , h1 , ul);

const root = ReactDOM.createRoot(document.querySelector(#root));
root.render(app);
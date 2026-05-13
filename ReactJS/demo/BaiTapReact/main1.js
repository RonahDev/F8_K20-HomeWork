
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

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(list);
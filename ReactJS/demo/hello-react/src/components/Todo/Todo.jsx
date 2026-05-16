import { useState } from "react";
import "./Todo.css"

function Todo () {
    const [task , setTask] = useState("")
    const [task , setTasks] = useState([])

    const addTasks = () => {
        if (task.trim() === "") return

        setTasks([...tasks, task])
        {/*GIẢ SỬ HIỆN TẠI
            tasks = ["Gym", "Study"]
            và task = "React"
        Dấu ... gọi là Spread Operator
        Muốn thêm cái React vào trong cái list tasks hiện tại ["Gym", "Study", "React"]

        ...tasks : lấy toàn bộ phần tử bên trong Array ra

        Ví dụ : tasks = ["Gym", "Study"]
        khi dùng spread ...tasks
        nó sẽ thành "Gym", "Study"

        [...tasks, task] => [
                            "Gym",
                            "Study",
                            "React"
                            ]
        */}

        setTask("")
    }
}
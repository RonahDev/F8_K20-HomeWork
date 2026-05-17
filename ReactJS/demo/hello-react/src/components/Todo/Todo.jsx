import { useState } from "react";
import "./Todo.css"

function Todo () {
    const [task , setTask] = useState("")
    const [tasks , setTasks] = useState([])

    const addTasks = () => {
        if (task.trim() === "") return

        setTasks([...tasks, task])
/*
GIẢ SỬ HIỆN TẠI

tasks = ["Gym", "Study"]
task = "React"

Spread Operator (...) dùng để lấy toàn bộ
phần tử bên trong array cũ.

...tasks
=> "Gym", "Study"

Nên:

[...tasks, task]

sẽ thành:

[
  "Gym",
  "Study",
  "React"
]

React thường dùng spread operator để tạo
array mới thay vì sửa trực tiếp array cũ.
*/

        setTask("")
    }
    return (
        <div>
            <input type="text" 
            value={task}
            onChange={(e) => {
                setTask(e.target.value)
            }}/>

            <button onClick={addTasks}>Add Task</button>

            <ul>
                {
                    task
                }
            </ul>
        </div>
    )
}
export default Todo
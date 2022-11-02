import { useState } from "react"
import { TodoInput } from "./todoinput"
import { TodoList } from "./todolist"

export const TodoMain=()=>{

    const [input,setinput] =useState("")
    const [todo,settodo] = useState([])



    const TodoSubmit=()=>{
     settodo([input, ...todo])
    }


    return(

        <div>
       <h1>Todo App With Local Storage </h1> 
       <TodoInput
        input={input}
        setinput={setinput}
        TodoSubmit={TodoSubmit}
       />




        {todo.map((item,index)=>{
            return(
                <TodoList key={index}
                           item={item}
                           index={index}

                />
            )
        })}
        </div>
    )




}
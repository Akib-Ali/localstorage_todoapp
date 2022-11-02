import { useEffect, useState } from "react"
import { TodoInput } from "./todoinput"
import { TodoList } from "./todolist"

export const TodoMain=()=>{

    const [input,setinput] =useState("")
    const [todo,settodo] = useState(getLocalItems())



    const TodoSubmit=()=>{
     settodo([input, ...todo])

     setinput("")
    }

    //add local storage

    useEffect(()=>{
        localStorage.setItem("list", JSON.stringify(todo))

    },[todo])


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




const getLocalItems=()=>{

    let list = localStorage.getItem("list")
    if(list){
        return JSON.parse(localStorage.getItem("list"))

    }else{
        return []
    }

}
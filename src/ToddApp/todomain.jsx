import { useState } from "react"
import { TodoInput } from "./todoinput"

export const TodoMain=()=>{

    const [input,setinput] =useState("")

    return(

        <div>
       <h1>Todo App With Local Storage </h1> 
       <TodoInput
        input={input}
        setinput={setinput}
       />
        </div>
    )




}
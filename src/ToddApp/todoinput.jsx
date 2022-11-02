export const TodoInput=(props)=>{


const handleChange=(e)=>{
    props.setinput(e.target.value)

}

console.log(props.input)



    return(
        <div>
        <input placeholder="Enter Item"  value={props.input} onChange={handleChange}/>
        <button>Add Task</button>
        </div>
    )
}
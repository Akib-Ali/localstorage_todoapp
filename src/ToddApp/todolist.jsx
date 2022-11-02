export const TodoList=(props)=>{



    return(
        <div style={{display:"flex" ,gap:"50px", marginTop:"10px", alignItem:"center" ,width:"300px"}}>
         <h3>{props.item}</h3> 
         <button style={{background:"black", color:"white", height:"50px", mt:"10px"}} onClick={(()=> props.handleDelete(props.id))}>Remove Item</button>
        </div>
    )
}
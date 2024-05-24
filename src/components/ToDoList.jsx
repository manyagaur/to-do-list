import React, { useEffect } from "react";
import { useState } from "react";

function ToDoList(){

    const [newTask, setNewTask]=useState([])
    function handleTasks(e){
        setNewTask(e.target.value)

    }

    const [tasks,setTasks]= useState([])

    function handleAddTask(e){
        if (newTask.trim()!==""){
        const newTaskk=[newTask]
        setTasks([...tasks, newTaskk])
        console.log(tasks)
        setNewTask("")
        }
    }

    const [headingText, setHeadingText] = useState("");
    useEffect(() => {
        const texts = ["To-Do-List📃", "Manage your tasks⌛", "Good to go :)"];
        let index = 0;

        const interval = setInterval(() => {
            setHeadingText(texts[index]);
            index = (index + 1) % texts.length; 
        }, 1500); 

        return () => clearInterval(interval);
    }, []); 

    

    function deleteTask(index){

        const updatedTasks=tasks.filter((_, i)=>i!==index)
        setTasks(updatedTasks)

    }

    function taskUp(index){
        if (index>0){
            const updatedTasks=[...tasks]
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index - 1];
            updatedTasks[index - 1] = temp;
            setTasks(updatedTasks)
        }

    }

    function taskDown(index){
        if (index<tasks.length-1){
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index + 1];
            updatedTasks[index + 1] = temp;
            setTasks(updatedTasks)
        }
    }

    function Task({taskName, index}){
        return(
            <>
            <div style={{display:"flex", alignItems:"center", backgroundColor:"lavender", color:"black", justifyContent:"space-between", height:"27px", width:"400px", border:"solid pink 2px"}}>
                <h4 style={{flex:"1"}}>{taskName}</h4>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                <button type="button"
                 style={{
                    background: "linear-gradient(to right, #d1a7f5, #b78fef, #a87ae9, #9665e3, #8550de)",
                    border: "none",
                    color: "white",
                    borderRadius: "4px",
                    cursor: "pointer"
                }} 
                onClick={()=>taskUp(index)}>👆</button>
                <button type="button"
                style={{
                    background: "linear-gradient(to right, #d1a7f5, #b78fef, #a87ae9, #9665e3, #8550de)",
                    border: "none",
                    color: "white",
                    borderRadius: "4px",
                    cursor: "pointer"
                }} 
                onClick={()=>taskDown(index)}>👇</button>
                <button type="button" style={{background: "linear-gradient(to right, #ff69b4, #ff6a9a, #ff6b7f, #ff6d64, #ff6f49)", border: "none",
                            color: "white",
                            borderRadius: "3px",
                            cursor: "pointer"}} onClick={()=>deleteTask(index)}>Delete</button>
                </div>
            </div>
            </>
        )
    }

    return(
        <>
        <h1 style={{backgroundImage: "linear-gradient(to right, #ff69b4, #ff6a9a, #ff6b7f, #ff6d64, #ff6f49)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "cursive",
            fontSize: "2em",
            fontWeight: "bold"}}>
        {headingText}</h1>
        <div style={{display:"flex" , alignItems:"center", justifyContent:"center"}}>
        <input className="task-input" type="text" placeholder="Enter a task" value={newTask} onChange={handleTasks}></input>
        <button  className="add-button" type="button" onClick={handleAddTask}>Add</button><br></br><br></br><br></br>
        </div><br></br>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}> <br></br>
        <ol style={{padding:"0", listStyleType: "none"} }>
            {tasks.map((task,index)=>
            <li style={{marginBottom:"15px"}} key={index}>
                <Task taskName={task} index={index}/>
            </li>
            )}<br></br>
        </ol>
        </div><br></br>
        </>
    )
}

export default ToDoList
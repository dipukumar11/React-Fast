function Todo({task, isDone}){
    console.log(task, isDone)
    if(isDone){
        return <h1>ToDo List {task} </h1>
    }
    else{
        return <p>Working It </p>
    }

  
}

export default Todo


let tasks=[]
const tasksList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');
// const enterbtnEl=document.getElementById('enter-btn')
// const dueDateEl=document.getElementById('dueDate')





// console.log('Working');

async function fetchAPI(){

    // fetch('https://jsonplaceholder.typicode.com/todos')
    // .then(response=>response.json())
    // .then(data=>{
    //     tasks=data.slice(0,10)
    //     renderList()
    // }
    //     )

    const response=await fetch('https://jsonplaceholder.typicode.com/todos')
    const data=await  response.json()
    tasks=data.slice(0,10)
    renderList()
}

function renderList () {
 
    tasksList.innerHTML=''
    
    tasks.forEach(task=>{
        const li=document.createElement('li')

        li.innerHTML+=`
        
          <input type="checkbox" id="${task.id}" ${task.completed ? 'checked':''} class="custom-checkbox">
          <label for="${task.id}">${task.title}</label>
          <img src="/delete.png" class="delete" data-id="${task.id}" />
         
        `
        tasksList.append(li)

    })
}

function toggleTask (taskId) {
    const task=tasks.filter(task=>{
        return task.id==taskId
        
    })
    console.log(task[0])
    if(task.length>0){
        const currentTask=task[0]
        currentTask.completed = !currentTask.completed
        renderList()
        showNotification('Task Toggled successfully')
    }
}

function deleteTask (taskId) {

    // console.log(taskId)
    const newTask=tasks.filter(function(task){ 
        
        return task.id!=taskId 
    }) 
    console.log(newTask)
    tasks=newTask;

    renderList()
    showNotification('Task deleted successfully')

}


function addTask (task) {
    if(task){
        tasks.push(task)
        renderList()
        showNotification('Task added successfully')
        return
    }
    showNotification('task cannot be added')
   


 }


function showNotification(text) {
    alert(text)
}

function handleInputKeypress(e){
    if(e.key==="Enter"){
        const text=e.target.value
       
        if(!text){
            showNotification('Task text cannot be empty')
        }

        const task={
            title:text,
            id:Date.now().toString(),
            completed:false
        }
        e.target.value=''
        addTask(task)
        console.log(task)
    }
}

function handleclickListener(e){
    const target=e.target
    console.log(target)
    if(target.className=='delete'){
        const taskId=target.dataset.id
        deleteTask(taskId)
        return
    }else if(target.className=='custom-checkbox'){
        const taskId=target.id
        // console.log(task)
        toggleTask(taskId)
        return
    }
}

function initializeApp(){
    fetchAPI()
    addTaskInput.addEventListener('keyup',handleInputKeypress)
    document.addEventListener('click',handleclickListener)
}

initializeApp()
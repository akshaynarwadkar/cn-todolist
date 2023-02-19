

let tasks=[]
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');
const enterbtnEl=document.getElementById('enter-btn')
const dueDateEl=document.getElementById('dueDate')





enterbtnEl.onclick=()=>{
    taskList.innerHTML=`` 
    tasks.push({
        title:addTaskInput.value,
        dueDate:dueDateEl.value,
        id:new Date().getTime()
    })
    
    console.log(tasks)
    
    rendertask()
}

function myfunction(event){
    
    tasks=tasks.filter(task=>{
        return task.id!== parseInt(event.target.id)
    })
    rendertask()
    
}

function rendertask(){
    console.log('wokring')
    taskList.innerHTML=''
    console.log(tasks)
    tasks.forEach((item)=>{
        taskList.innerHTML+=`<li>${item.title} ${item.dueDate}</li>
        <button onclick="myfunction(event)" id=${item.id} type="button">Delete</button > `
    })   
}


































// console.log('Working');

// function renderList () {}

// function markTaskAsComplete (taskId) {}

// function deleteTask (taskId) {

// }

// function addTask (task) {
//     // document.addEventListener('keyup',addtaskitem)
    
//     enterbtnEl.onclick=()=>{
//         taskList.innerHTML+=`<li>${addTaskInput.value}</li>` 
//     }

    
// }

// addTask()

// function showNotification(text) {}
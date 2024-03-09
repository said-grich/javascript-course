

var addTaskButton=document.getElementById("add-todo-btn");
var ulTodoList=document.getElementById("todo-list")


addTaskButton.addEventListener("click",addToList)

function getTextFromInput(){
    var inputElement=document.getElementById("todo-input")

    var userText=inputElement.value
    return userText;
}


function addToList(){

    var userText=getTextFromInput();
    var liElemet=document.createElement("li")
    liElemet.innerHTML = userText
    ulTodoList.appendChild(liElemet)

}





// document.getElementById('add-todo-btn').addEventListener('click', function() {


//     const input = document.getElementById('todo-input');
//     const todoList = document.getElementById('todo-list');

//     if (input.value.trim() !== '') {
//         const li = document.createElement('li');
//         const del_button=document.createElement('button');
//         li.textContent = input.value;
//         // del_button.innerText="X"
//         // li.appendChild(del_button)
//         todoList.appendChild(li);
//         input.value = ''; // Clear the input field
//     } else {
//         alert('Please enter a task.');
//     }



// });

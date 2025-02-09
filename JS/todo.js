const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos=[];

function saveToDos()
{
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    li.id=newToDoObj.id;
    li.classList.add("todo-item");
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    const button = document.createElement("button");
    button.innerText = "✘";
    button.classList.add("delete-button");
    button.addEventListener("click", (event) => {
        const li = event.target.parentElement;
        toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
        li.remove();
        saveToDos();
    })

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li); // 무조건 마지막에 넣기
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newToDoObj={
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj); 
    saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null)
{
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
}
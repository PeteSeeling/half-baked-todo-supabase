import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos, 
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

todoForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    // on submit, create a todo, reset the form, and display the todos
    const data = new FormData(todoForm);
    const todo = data.get('todo');
     
    await createTodo(todo);
    await displayTodos();
    todoForm.reset();
});

async function displayTodos() {
    // fetch the todos
    const todos = await getTodos();
   
    todosEl.textContent = '';
    // display the list of todos
    for (let todo of todos) {
        const todosListItemEl = renderTodo(todo);

        todosEl.append(todosListItemEl);
       
        todosListItemEl.addEventListener('click', async() =>{
            await completeTodo(todo.id);
           
            displayTodos();
        });
    }

// add an on load listener that fetches and displays todos on load

    logoutButton.addEventListener('click', () => {
        logout();
    });


    deleteButton.addEventListener('click', async() => {
    // delete all todos
        await deleteAllTodos();
    // then refetch and display the updated list of todos
        await displayTodos();
    });}

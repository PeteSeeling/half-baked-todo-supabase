export function renderTodo(todo) {
    // create a div and a p tag
    const div = document.createElement('div');
    const p = document.createElement('p');
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    if (todo.complete === true) {
        div.classList.add('complete');
    }
    else {
        div.classList.add('incomplete');
    }
    
    div.classList.add('todo');

    p.textContent = `${todo.todo}`;

    div.append(p);
  
    return div;
   
}
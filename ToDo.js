const form = document.querySelector('#add-item');
const todo = document.querySelector('ul');
const input = document.querySelector('#submit');
const newTodo = document.createElement('li');
const listTodo = document.querySelector('ul');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newTodo = document.createElement('li');
    newTodo.innerText = input.value;
    input.value = '';
    listTodo.appendChild(newTodo);
});


todo.addEventListener('click', function(e){
    e.target.classList.toggle('completed');
    let { done } = todo;
    if (done) {
        localStorage.setItem('completed', true);
    } else {
        localStorage.removeItem('completed')
    }
})

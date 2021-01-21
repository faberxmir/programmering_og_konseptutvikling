const list = document.querySelector(".todoList");

//Form for adding new todos
const newTodo = document.querySelector(".newTodo");

//Form for searching
const search = document.querySelector('.search');

const filterTodos = (term) => {
    let todolist = Array.from(list.children);
    /*todolist.forEach( e => {
        if(e.innerHTML.contains(term)){
            console.log("found!");
        }
    });*/
}

search.addEventListener('keyup', e => {
    const term = search.value;
    console.log(term);
    filterTodos(term);
});

list.addEventListener('click', e => {
  const clicked = e.target;
  if(e.target.classList.contains('delete')){
      e.target.parentElement.remove();
  }
});

newTodo.addEventListener('submit', e => {
    e.preventDefault();
    const toDo = newTodo.add.value.trim();
    if(toDo.length){
        generateListTemplate(toDo);
    }
    newTodo.reset();
});

const generateListTemplate = todo =>{
    const html = 
    `
        <li class="todoElement">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete" name="rems"></i>
        </li>
    `;
    list.innerHTML += html;
}
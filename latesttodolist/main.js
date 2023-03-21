// !selecting the elements from dom
const taskinput = document.querySelector('.taskinput');
const addtodobutton = document.querySelector('.addTodos');
const todoDesc = document.querySelector('.taskdesc');
const listcontainer = document.querySelector('#listcontainer');

// function
function addtodo(event) {
  if (taskinput.value == '') {
    alert('Task Cannot Be Empty');
    event.preventDefault();
  } else {
    event.preventDefault();
    // !creating the elements
    const tododiv = document.createElement('div');
    tododiv.classList.add('Todo');

    const newTodo = document.createElement('li');
    newTodo.classList.add('Todo-item');

    const todoDescription = document.createElement('p');
    todoDescription.classList.add('Description');

    todoDescription.innerText = taskinput.value;

    newTodo.appendChild(todoDescription);
    tododiv.appendChild(newTodo);
    // console.log(todoDesc.value);

    if (todoDesc.value == '') {
      alert('your description is empty ');
    } else {
      const descadd = document.createElement('p');
      descadd.classList.add('Description2');
      descadd.innerText = 'Task Description :  ' + todoDesc.value;
      newTodo.appendChild(descadd);
    }

    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class = "fa-solid fa-circle-check"></i>';
    completeButton.classList.add('complete-btn');
    tododiv.appendChild(completeButton);
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    tododiv.appendChild(trashButton);

    listcontainer.appendChild(tododiv);
    alert('Your Task Added');
  }
  taskinput.value = '';
  todoDesc.value = '';
}
function deletecheck(e) {
  const item = e.target;
  console.log(item);
  e.preventDefault();
  // deleted
  if (item.classList == 'trash-btn') {
    const todo = item.parentElement;
    // trash btn animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });
  }
  // completed
  else if (item.classList == 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

//! event listener for addtodo btn and delete
addtodobutton.addEventListener('click', addtodo);
listcontainer.addEventListener('click', deletecheck);

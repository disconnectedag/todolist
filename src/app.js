const form = document.querySelector('#todo-form');
const taskType = document.querySelector('#task-type');
const todoInput = document.querySelector('#todo-input');
const taskTable = document.querySelector('.task-table');
const taskArr = [];
const tableBody = document.querySelector('tbody');


const handleFormSubmit = (event) => {
  event.preventDefault();
  const todo = {
    todo: todoInput.value,
    taskType: taskType.value,
  };
  taskArr.push(todo);
  console.log(taskArr);
  addTaskToList();
  console.log(deleteBtn)
};

const onDeleteRow = (event) => {
  if(event.target.classList.contains("delete-btn")){
    const btn = event.target;
    btn.closest('tr').remove()
  }
}

const addTaskToList = () => {
  tableBody.innerHTML = "";
  taskArr?.forEach((task) => {
    tableBody.insertAdjacentHTML(
      'beforeend',
      `
      <tr class="new-task">
        <td>${task.todo}</td>
        <td>${task.taskType}</td>
        <td><i class="delete-btn fa fa-trash-o" style="font-size:30px;color:red"></i></td>
      </tr>`
    );
  });
};

form.addEventListener('submit', handleFormSubmit);
//because we add the delete button dynamically, we can't use an on-click event
taskTable.addEventListener('click', onDeleteRow);
const form = document.querySelector('#todo-form');
const taskType = document.querySelector('#task-type');
const todoInput = document.querySelector('#todo-input');
const taskOutput = document.querySelector('.task-container');
const taskArr = [{ todo: 'wash clothes', taskType: 'chore' }];

const handleFormSubmit = (event) => {
  event.preventDefault();
  const todo = {
    todo: todoInput.value,
    taskType: taskType.value,
  };
  taskArr.push(todo);
  console.log(taskArr);
  addTaskToList();
};

const addTaskToList = () => {
  taskArr?.forEach((task) => {
    taskOutput.insertAdjacentHTML(
      'beforeend',
      `<div>
      <span>${task.todo}</span>
      <span>${task.taskType}</span>
    </div>`
    );
  });
};

form.addEventListener('submit', handleFormSubmit);

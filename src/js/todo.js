import { refs } from './refs';
import storage from './storage';

let todo = {};
const LOCAL_STORAGE_KEY = 'form-data';

initTodo();

refs.form.addEventListener('input', onInputValue);

function onInputValue(e) {
  const { name, value } = e.target;

  todo[name] = value;

  storage.save(LOCAL_STORAGE_KEY, todo);
}

function initTodo() {
  const savedTodo = storage.load(LOCAL_STORAGE_KEY);
  
  if (savedTodo) {
    todo = savedTodo;

    for (const key in todo) {
      refs.form.elements[key].value = todo[key];
    }
  }
}

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  if (todo.text === "" || todo.priority === "") {
    alert("Заповніть усі поля!")
    return;
  }

  console.log(todo);
  refs.form.reset();
  storage.remove(LOCAL_STORAGE_KEY);
  Object.keys(todo).forEach(key => todo[key] = "");
}
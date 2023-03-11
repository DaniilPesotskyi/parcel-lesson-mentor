import { refs } from './refs';
import storage from './storage';

let todo = {};
const LOCAL_STORAGE_KEY = 'form-data';

initTodo();

refs.form.addEventListener('input', onInputValue);

function onInputValue(e) {
  const { name, value } = e.target;

  todo[name] = value;
  console.log(todo);
  storage.save(LOCAL_STORAGE_KEY, todo);
}

function initTodo() {
  const savedTodo = storage.load(LOCAL_STORAGE_KEY);
  console.log(savedTodo);
  if (savedTodo) {
    todo = savedTodo;

    for (const key in todo) {
      refs.form.elements[key].value = todo[key];
    }
  }
}

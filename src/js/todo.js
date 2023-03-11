import {refs} from './refs'

const todo = {} 

refs.form.addEventListener('input', onInputValue)

function onInputValue(e) {
    const {name, value} = e.target

    todo[name] = value
    console.log(todo)
}
import * as el from "./elements.js";
import * as actions from './actions.js'
import { updateDisplay } from "./timer.js";
import state from "./state.js";

export function registerControls(){
  el.controls.addEventListener('click', (event) => {
  const action = event.target.dataset.action

  if (typeof actions[action] !== 'function'){
    return
  }

  actions[action]()
  
  })
}

export function setMinutes(){

  el.minutes.addEventListener('focus', () =>{
    el.minutes.textContent = ''
  })
// A linha abaixo coloca a verificacao com uma expressao regular para que o campo so receba numeros
  el.minutes.onkeypress = (event) => /\d/.test(event.key) 

  el.minutes.addEventListener('blur', (event) => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time

    state.minutes = time
    state.seconds = 0

    updateDisplay()

    el.minutes.removeAttribute('contenteditable')
  })
}
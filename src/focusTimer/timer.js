import state from "./state.js"
import * as el from './elements.js'


export function countDown(){
  if(!state.isRunning){
    return
  }

  console.log('init')

  setTimeout(() => countDown(), 1000)
}

export function updateDisplay(minutes, seconds){
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, '0')
  el.seconds.textContent = String(seconds).padStart(2, '0')
}
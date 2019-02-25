
const initialState = {
  value: 0,
  counter: 0,
  color: 'red'
}

const valueChangeReducer = (state = initialState.value, action) => {
  switch(action.type) {
    case 'ADD_VALUE':
      return state + action.value
    default:
      return state
  }
}

const counterChangeReducer = (state = initialState.counter, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const colorChangeReducer = (state = initialState.color, action) => {
  switch(action.type) {
    case 'BLUE':
      return 'blue'
    case 'RED':
      return 'red'
    case 'NEXT':
      if (state == 'red') {
        return 'blue'
      } else {
        return 'red'
      }
    default:
      return state
  }
}
const rootReducer = this.Redux.combineReducers({
  value: valueChangeReducer,
  counter: counterChangeReducer,
  color: colorChangeReducer
})

const  { createStore } = Redux;

const store = createStore(rootReducer);

const changeColorBlue = () => {
  store.dispatch({ type: 'BLUE'})
}
const changeColorRed = () => {
  store.dispatch({ type: 'RED'})
}
const changeColorNext = () => {
  store.dispatch({ type: 'NEXT'})
}
const addValue = () => {
  store.dispatch({ type: 'ADD_VALUE', value: 5})
}
const incrementCounter = () => {
  store.dispatch({ type: 'INCREMENT'})
}
const decrementCounter = () => {
  store.dispatch({ type: 'DECREMENT'})
}

function renderState() {
  const state = store.getState();
  const stateDiv = document.getElementById('state');
  while(stateDiv.firstChild) {
    stateDiv.removeChild(stateDiv.firstChild);
  }
  const valueElem = document.createElement('li');
  const counterElem = document.createElement('li');
  const colorElem = document.createElement('li');
  valueElem.appendChild(document.createTextNode(`value: ${state.value}`));
  counterElem.appendChild(document.createTextNode(`counter: ${state.counter}`));
  colorElem.appendChild(document.createTextNode(`color: ${state.color}`));
  stateDiv.appendChild(valueElem);
  stateDiv.appendChild(counterElem);
  stateDiv.appendChild(colorElem);
}

window.onload = renderState;
store.subscribe(renderState);

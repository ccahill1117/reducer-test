
const initialState = {
  value: 0,
  counter: 0,
  color: 'red'
}

const value = (state = initialState.value, action) => {
  console.log('value', action.type)
  switch(action.type) {
    case 'ADD_VALUE':
      return state + action.value
    default:
      return state
  }
}

const counter = (state = initialState.counter, action) => {
  console.log('counter', action.type)
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const color = (state = initialState.color, action) => {
  console.log('color', action.type)
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
  value,
  counter,
  color
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
  console.log('state', store.getState());
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

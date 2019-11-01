import { createStore } from 'redux';
import { rootReducer } from './redux/reducers/rootReducer';
import { increaseCounter } from './redux/action_creators/increment';
import { decreaseCounter } from './redux/action_creators/decrement';


const store = createStore(rootReducer); // create store

// access and update counter value
const render = () => {  
  document.getElementById('counter').innerText = store.getState() ;
}

// initialize the counter
render();

// subscribe to store by passing it a callabck(render is called whenever state is updated)
store.subscribe(render);

// add action listeners, to dispatch actions whenever user clicks the buttons
document.getElementById('inc').addEventListener('click', () => store.dispatch(increaseCounter()));
document.getElementById('dec').addEventListener('click', () => store.dispatch(decreaseCounter()));


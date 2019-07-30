import {createStore} from 'redux';
import reducer from './reducer';
import {inc, dec, rnd} from './actions';

const store = createStore(reducer);
const { dispatch } = store;

const incDispatch = (() => dispatch( inc() ));
const decDispatch = (() => dispatch( dec() ));
const rndDispatch = ((payload) => dispatch( rnd(payload) ));

store.subscribe(() => {
  document
    .getElementById('counter')
    .innerHTML = store.getState();
});

document
  .getElementById('inc')
  .addEventListener('click', () => incDispatch());

document
  .getElementById('dec')
  .addEventListener('click', () => decDispatch());

document
  .getElementById('rand')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random()*10)
    rndDispatch(payload);
  });
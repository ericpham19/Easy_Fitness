import {createStore}  from 'redux';
import userReducer  from './reducers/useReducer';



const store = createStore(userReducer)

export default store;
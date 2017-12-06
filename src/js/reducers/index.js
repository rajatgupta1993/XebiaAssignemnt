import { combineReducers } from 'redux';
import planets  from './planetReducer.js';
import search from './searchReducer.js';

const rootReducer = combineReducers({
  planets: planets,
  search: search,
})

export default rootReducer;

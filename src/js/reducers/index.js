import { combineReducers } from 'redux';
import planets from './planetReducer';
import search from './searchReducer';

const rootReducer = combineReducers({
    planets,
    search,
});

export default rootReducer;

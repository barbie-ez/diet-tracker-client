import { combineReducers } from 'redux';
import meals from './mealReducer';

const rootReducer = combineReducers({
  meals
});

export default rootReducer;

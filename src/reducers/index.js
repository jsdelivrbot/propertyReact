import { combineReducers } from 'redux';
import PropertyReducer from './reducer_property';

const rootReducer = combineReducers({
  property: PropertyReducer
});

export default rootReducer;

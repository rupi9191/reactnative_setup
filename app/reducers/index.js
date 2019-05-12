import { combineReducers } from 'redux';
import homeReducer from './home';

const rootReducer = combineReducers({
    appState: homeReducer,
});

export default rootReducer;
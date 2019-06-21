import {createStore} from 'redux'
import rootReducer from './reducers/rootReducer'
import State from './State'
export default createStore(rootReducer,State)
/* Creates redux store. */

import { initialState, rootReducer} from './reducers'
import { createStore} from 'redux'

const store = createStore(rootReducer, initialState);

export default store;
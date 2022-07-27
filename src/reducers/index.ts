import {combineReducers} from 'redux'
import fetUrl from './fetUrl'
const rootReducers = combineReducers({
    fetchData:fetUrl
})
export default rootReducers;
export type State = ReturnType<typeof rootReducers >
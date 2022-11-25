import { combineReducers } from 'redux'
import { setToggleMenu, setUserSignin, setUserPayload } from './menuReducer'

const reducers = combineReducers({
    setToggleMenu,
    setUserSignin,
    setUserPayload

})

export default reducers
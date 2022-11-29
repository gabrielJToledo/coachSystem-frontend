import { combineReducers } from 'redux'
import { setToggleMenu, setUserSignin, setUserPayload, setPlusGoalValue } from './menuReducer'

const reducers = combineReducers({
    setToggleMenu,
    setUserSignin,
    setUserPayload,
    setPlusGoalValue
})

export default reducers
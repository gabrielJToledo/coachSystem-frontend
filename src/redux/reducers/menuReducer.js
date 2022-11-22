import { actionTypes } from "../constants/actionTypes";

const defaultState = {
    toggleMenuValue: false
}

export function setToggleMenu(state = defaultState, {type, payload}) {
    switch(type){
        case actionTypes.changedToggleMenu:
            return {
                ...state, toggleMenuValue: payload
            }
        default:
            return state
    }
}
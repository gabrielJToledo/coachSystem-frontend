import { actionTypes } from "../constants/actionTypes";

const defaultState = {
    toggleMenuValue: false,
    userSign: false,
    userPayload: {}
}

export function setToggleMenu(state = defaultState, {type, payload}) {
    switch(type){
        case actionTypes.changedToggleMenu:
            return {
                ...state.toggleMenuValue, toggleMenuValue: payload
            }
        default:
            return state
    }
}

export function setUserSignin(state = defaultState, {type, payload}) {
    switch (type) {
        case actionTypes.changedUserSignin:
            return {
                ...state, userSign: payload
            }
        default:
            return state
    }
}

export function setUserPayload(state = defaultState, {type, payload}) {
    switch (type) {
        case actionTypes.changedUserPayload:
            return {
                ...state, userPayload: payload
            }
        default:
            return state 
    }
}
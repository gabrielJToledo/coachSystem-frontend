import { actionTypes } from "../constants/actionTypes";

export const changedToggleMenu = (toggleMenu) => {
    return {
        type: actionTypes.changedToggleMenu,
        payload: toggleMenu
    }
}

export const changedUserSignin = (userSignin) => {
    return {
        type: actionTypes.changedUserSignin,
        payload: userSignin
    }
}

export const changedUserPayload = (userPayload) => {
    return {
        type: actionTypes.changedUserPayload,
        payload: userPayload
    }
}
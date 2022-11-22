import { actionTypes } from "../constants/actionTypes";

export const changedToggleMenu = (toggleMenu) => {
    return {
        type: actionTypes.changedToggleMenu,
        payload: toggleMenu
    }
}
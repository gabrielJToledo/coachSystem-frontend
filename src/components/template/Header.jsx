import React from 'react'
import './Header.css'

import { useSelector, useDispatch } from 'react-redux'
import { changedToggleMenu } from '../../redux/actions/menuActions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
  const dispatch = useDispatch()

  const toggleMenuValue = useSelector((state) => state.setToggleMenu.toggleMenuValue)
  const userSigninValue = useSelector((state) => state.setUserSignin.userSign)
  const userPayloadValue = useSelector((state) => state.setUserPayload.userPayload)

  const handleClickToggleMenu = (toggle) => {
    if (toggleMenuValue === false) {
      toggle = true
    } else {
      toggle = false
    }
    dispatch(changedToggleMenu(toggle))
  }

  return (
    <header className={`header ${userSigninValue === true ? '' : 'd-none'}`}>
      <div className="toggleMenuContainer" onClick={handleClickToggleMenu} style={{display: toggleMenuValue === true ? 'flex' : 'none'}}>
        <FontAwesomeIcon className='toggleMenuContainer__icon' icon="fa-angle-right" />
      </div>
      <div className="w-100 d-flex justify-content-center align-items-center">
        <h2 className='h4 m-0 fw-800 text-center'>Seja bem vindo ao SystemCoach, {userPayloadValue.name} - Dashboard</h2>
      </div>
    </header>
  )
}

export default Header
import React from 'react'
import './Header.css'

import { useSelector, useDispatch } from 'react-redux'
import { changedToggleMenu } from '../../redux/actions/menuActions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
  const dispatch = useDispatch()
  const toggleMenuValue = useSelector((state) => state.setToggleMenu.toggleMenuValue)
  const handleClickToggleMenu = (toggle) => {
    if (toggleMenuValue === false) {
      toggle = true
    } else {
      toggle = false
    }
    dispatch(changedToggleMenu(toggle))
  }

  return (
    <header className="header">
      <div className="toggleMenuContainer" onClick={handleClickToggleMenu} style={{display: toggleMenuValue === true ? 'flex' : 'none'}}>
        <FontAwesomeIcon className='toggleMenuContainer__icon' icon="fa-angle-right" />
      </div>
      <div className="c-headerContent">

      </div>
    </header>
  )
}

export default Header
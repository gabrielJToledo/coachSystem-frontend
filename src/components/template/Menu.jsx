import React, { useEffect } from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
import { menus } from '../../global'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { logo, prof } from '../../global'

import { changedToggleMenu } from '../../redux/actions/menuActions'
import { useDispatch, useSelector } from 'react-redux'

function Menu() {
  const dispatch = useDispatch()

  // ToggleMenu Changes | userSigninValue
  const toggleMenuValue = useSelector((state) => state.setToggleMenu.toggleMenuValue)
  const userSigninValue = useSelector((state) => state.setUserSignin.userSign)


  const handleClickToggleMenu = (toggle) => {
    if (toggleMenuValue === false) {
      toggle = true
    } else {
      toggle = false
    }
    dispatch(changedToggleMenu(toggle))
  }

  return (
    <nav className={`menu ${toggleMenuValue === true ? 'toggleMenuTrue' : ''} ${userSigninValue === true ? '' : 'd-none'}`}>

      <div className='c-menu__toggleMenuFalse' onClick={handleClickToggleMenu}><FontAwesomeIcon className='c-menu__iconToggleMenuFalse' icon="fa-chevron-left" /></div>

      <section className="c-logo">
        <a href=""><img className='c-logo__img' src={logo} alt="logo" /></a>
      </section>

      <section className='c-menuContent'>
        <div className="c-menuContent__menuTextContainer my-1">
          <h2 className='fs-6 fw-bold text-uppercase'>Seu profissional</h2>
        </div>

        <div className="container d-flex justify-content-center">
          <img className='c-img__prof rounded w-100' src={prof} alt="" />
        </div>

        <div className="c-menuContent__menuTextContainer">
          <h2 className='fs-6 my-3 fw-bold text-uppercase'>Menu</h2>
        </div>

        <ul className='c-menuContent_menuLinks'>
          {menus.map((menu, index) => {
            return <Link className='c-menuContent__link' to={menu.menuLink} key={index}>
              <li className='c-menuContent__li'>
                <FontAwesomeIcon className='c-menuContent__icon' icon={menu.menuIcon} /> {menu.menuName}
              </li>
            </Link>
          })}
        </ul>
      </section>

    </nav>
  )
}

export default Menu
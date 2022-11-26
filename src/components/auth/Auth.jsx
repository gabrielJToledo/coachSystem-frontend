import React, { useState, useEffect } from 'react'
import './Auth.css'

import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changedUserPayload, changedUserSignin } from '../../redux/actions/menuActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Auth() {
  // Dispatch | Navigate
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // UseSelector
  const userSigninValue = useSelector((state) => state.setUserSignin.userSign)

  // Set States
  const [inputEmail, setInputEmail] = useState()
  const [inputPassword, setInputPassword] = useState()

  // Handle Functions
  const updateInputEmail = (e) => {
    setInputEmail({ email: e.target.value })
  }
  const updateInputPassword = (e) => {
    setInputPassword({ password: e.target.value })
  }

  const handleClickSubmit = (e) => {

    e.preventDefault()

    axios.post('http://localhost:5000/signin', {
      email: inputEmail.email,
      password: inputPassword.password
    }).then((e) => {

      const userData = e.data
      dispatch(changedUserSignin(true))
      dispatch(changedUserPayload(userData))
      navigate('/home')

    }).catch((err) => {

      console.log(err)

    })
  }

  return (
    <div className={`auth__container d-flex justify-content-center align-items-center ${userSigninValue === true ? 'd-none' : ''}`}>
      <div className="auth__row d-flex">
        <div className="auth__image">
        </div>

        <div className="auth__signin d-flex flex-column justify-content-center align-items-center w-50">
          <FontAwesomeIcon icon="fa-solid fa-clipboard-question" className='auth__icon my-2' />

          <h2 className='text-center fs-14 h5 my-4'>Faça seu login no CoachSystem</h2>

          <div className="d-flex justify-content-center align-items-center w-100">
            <form onSubmit={handleClickSubmit} action="" className='d-flex flex-column justify-content-center align-items-center w-100'>
              <div className="form__content d-flex flex-column my-2">
                <label htmlFor="">E-mail: </label>
                <input onChange={updateInputEmail} className='auth__input py-1 px-2' placeholder='exemplo@exemplo.com.br' type="text" />
              </div>

              <div className="form__content d-flex flex-column my-2">
                <label htmlFor="">Password: </label>
                <input onChange={updateInputPassword} className='auth__input py-1 px-2' type="password" />
              </div>

              <input className='px-3 py-1 my-3' type="submit" value="Entrar" />
            </form>
          </div>

          <div className="auth__someInformations">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
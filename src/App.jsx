import './App.css';
import './normalize.css'

import Header from './components/template/Header';
import Menu from './components/template/Menu';
import Content from './components/template/Content';
import Account from './components/template/Account';

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

function App() {
  const toggleMenuValue = useSelector((state) => state.setToggleMenu.toggleMenuValue)
  const userSigninValue = useSelector((state) => state.setUserSignin.userSign)
  const navigate = useNavigate()

  useEffect(() => {
    if(!userSigninValue) {
      navigate('/login')
    }
  }, [])

  if(userSigninValue) {
    return (
      <div className={`app ${toggleMenuValue === true ? 'toggleMenuTrue' : ''} ${userSigninValue === true ? '' : 'toggleMenuTrue header-none'}`}>
        <Header />
        <Menu />
        <Content />
        <Account />
      </div>
    );
  } else {
    <Navigate to='/login' replace={true} />
  }
}

export default App;

import './App.css';
import './normalize.css'

import Header from './components/template/Header';
import Menu from './components/template/Menu';
import Content from './components/template/Content';
import Account from './components/template/Account';

import { useSelector } from 'react-redux'

function App() {
  const toggleMenuValue = useSelector((state) => state.setToggleMenu.toggleMenuValue)

  return (
    <div className={`app ${toggleMenuValue === true ? 'toggleMenuTrue' : ''}`}>
      <Header/>
      <Menu/>
      <Content/>
      <Account/>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Nav.css'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'

function useLoginStatus() {
  const [login, setLogin] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:3001/login')
      .then((response) => {
        if (response.data.loggedIn === true) {
          setLogin(true)
        } else {
          setLogin(false)
        }
      })
      .catch((error) => {
        console.error('Error fetching login status:', error)
      })
  }, [])

  return login
}

const LoginOn = () => (
  <li className='navbar-icon'>
    <div className='navbar-links--icon' id='singup' style={{ marginTop: '45%' }}>
      <i className='fa-regular fa-user' />
    </div>
    <div className='user-dropdown-content'>
      <NavDropdown.Item>
        <Link to='/login'><i className='fa-solid fa-lock'></i> PERFIL</Link>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <Link to='/adminpage'><i className='fa fa-sign-out'></i> SAIR</Link>
      </NavDropdown.Item>
    </div>
  </li>
)

const LoginOff = () => (
  <li className='navbar-icon'>
    <div className='navbar-links--icon' id='singup'>
      <i className='fa-regular fa-user' />
    </div>
    <div className='user-dropdown-content'>
      <NavDropdown.Item>
        <Link to='/login'><i className='fa-solid fa-lock'></i> Logar</Link>
      </NavDropdown.Item>
    </div>
  </li>
)

function NavBar() {
  const login = useLoginStatus()

  const dropDown = React.useMemo(() => {
    return login ? <LoginOn /> : <LoginOff />
  }, [login])

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' id='navbar-logo'>MURASAKI</Link>
        <ul className='navbar-menu'>
          <li className='navbar-item'>
            <Link to='/categorias' className='navbar-links--categorias' id='categories-page'>CATEGORIAS</Link>
            <div className='categorias-dropdown-content'>
              <NavDropdown.Item key='aprender'>
                <Link to='/japanese'> APRENDER </Link>
              </NavDropdown.Item>
              <NavDropdown.Item key='morar'>
                <Link to='/'> MORAR </Link>
              </NavDropdown.Item>
              <NavDropdown.Item key='viajar'>
                <Link to='/'> VIAJAR </Link>
              </NavDropdown.Item>
              <NavDropdown.Item key='mais'>
                <Link to='/creators'> MAIS </Link>
              </NavDropdown.Item>
            </div>
          </li>
          <li className='navbar-item'>
            <Link to='/sobre' className='navbar-links--sobre' id='about-page'>SOBRE</Link>
          </li>
          <li className='navbar-item'>
            <h1 className='navbar-links--disable'>COMUNIDADE</h1>
          </li>
          {dropDown}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar

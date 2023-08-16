import React, { useState, useEffect } from 'react'
import NavBar from '../nav/Nav'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Form.css'

const Login = () => {

  const navigate = useNavigate()

  const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginStatus, setLoginStatus] = useState('')


  axios.defaults.withCredentials = true

  const getUsers = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login', {
      name: name,
      //email: email
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message)
      } else if (response.data[0] && response.data[0].name) {
        setLoginStatus(response.data[0].name)
      }
    })
  }

  useEffect(() => {
    axios.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn === true) {
        navigate('/userpage')
        setLoginStatus(response.data[0].name)
      }
    })
  }, [])

  return (
    <>
      <nav>
        <NavBar />
        <Breadcrumb className='bread-itens-jlpt'>
          <Breadcrumb.Item ><Link to='/'><i className='fa-solid fa-house'></i></Link></Breadcrumb.Item>
          <Breadcrumb.Item >Login</Breadcrumb.Item>
        </Breadcrumb>
      </nav>

      <form >
        <h1>Login</h1>
        <input
          type='text'
          autoComplete='username'
          placeholder='Nome'
          onChange={(event) => {
            setName(event.target.value)
          }}
        />
        {/* <input
          type='email'
          placeholder='Email'
          onChange={(event) => {
            setEmail(event.target.value)
          }}
        /> */}
        <input
          type='password'
          autoComplete='current-password'
          placeholder='Senha'
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        />
        <p>{loginStatus}</p>
        <button className='button-confirm' onClick={getUsers}>Entrar</button>
        <p>
          <Link to='/'>Esqueceu a senha? ・</Link>
          <Link to='/register'> Criar uma conta</Link>
        </p>
      </form>
    </>
  )
}

export default Login
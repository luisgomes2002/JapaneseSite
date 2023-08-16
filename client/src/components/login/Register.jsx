import React, { useState } from 'react'
import NavBar from '../nav/Nav'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Form.css'

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //const [confirmPassword, setConfirmPassword] = useState('')
  const [RegisterStatus, setRegisterStatus] = useState('')
  const [emailError, setEmailError] = useState(false)

  const usersAccount = (e) => {
    e.preventDefault()
    if (password.length <= 7) {
      setRegisterStatus('Senha menor que 8 dígitos')
    } else {
      axios
        .post('http://localhost:3001/register', {
          name: name,
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.data.error) {
            setEmailError(true)
            setRegisterStatus(res.data.error)
          } else if (res.data.success) {
            setRegisterStatus(res.data.success)
          }
        })
        .catch((error) => {
          console.log(error)
          setRegisterStatus('Ocorreu um erro ao criar a conta')
        })
    }
  }

  return (
    <>
      <nav>
        <NavBar />
        <Breadcrumb className='bread-itens-jlpt'>
          <Breadcrumb.Item ><Link to='/'><i className='fa-solid fa-house'></i></Link></Breadcrumb.Item>
          <Breadcrumb.Item >Registrar</Breadcrumb.Item>
        </Breadcrumb>
      </nav>

      <form>
        <h1>Criar Conta</h1>
        <input
          type='text'
          placeholder='Nome'
          onChange={(event) => {
            setName(event.target.value)
          }} />
        <input
          type='email'
          placeholder='Email'
          onChange={(event) => {
            setEmail(event.target.value)
          }} />
        <input
          type='password'
          placeholder='Senha'
          onChange={(event) => {
            setPassword(event.target.value)
          }} />
        {/* <input
          type='password'
          placeholder='Confirmar Senha'
          onChange={(event) => {
            setConfirmPassword(event.target.value)
          }} /> */}
        <p>{RegisterStatus}</p>
        <p>{emailError}</p>
        <button className='button-confirm' onClick={usersAccount}>Criar</button>
        <p>
          <Link to='/' className='links-form'>Retorna para o início ・</Link>
          <Link to='/login' className='links-form'> Login</Link>
        </p>
      </form>
    </>
  )
}

export default Register
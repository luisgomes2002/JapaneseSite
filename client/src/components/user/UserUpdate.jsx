import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from '../nav/Nav'
import { useNavigate } from 'react-router-dom'
import './UserUpdate.css'

const Update = () => {

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [newName, setNewName] = useState('')
  const [newAge, setNewAge] = useState(0)
  const [newGender, setNewGender] = useState('opN')
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newJlpt, setNewJlpt] = useState('Default')
  const [id, setId] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn === true) {
        setName(response.data.user.user_name)
        setId(response.data.user.user_id)
      } else {
        navigate('/login')
      }
    })
  })

  const upUsers = () => {
    axios.put(`http://localhost:3001/update/${id}`, {
      newName: newName,
      newEmail: newEmail,
      newAge: newAge,
    })
      .then((response) => {
        console.log(response.data)
      })
  }

  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <div className='user-update'>
        <h1>Bem Vindo {name}</h1>
        <p>Alterar/Deletar conta</p>
        <input className='input-user'
          type='text'
          autoComplete='username'
          placeholder='Nome'
          onChange={(event) => {
            setNewName(event.target.value)
          }} />

        <input className='input-user'
          type='text'
          placeholder='Idade'
          onChange={(event) => {
            setNewAge(event.target.value)
          }} />

        <div className='input-radio'>
          <label>
            <h3>Gender:</h3>
            <input
              type='radio'
              name='myRadio'
              value='opM'
              onChange={(e) => setNewGender(e.target.value)} />
            Masculino
          </label>
          <label>
            <input
              type='radio'
              name='myRadio'
              value='opF'
              onChange={(e) => setNewGender(e.target.value)} />
            Feminino
          </label>
          <label>
            <input
              type='radio'
              name='myRadio'
              value='opN'
              onChange={(e) => setNewGender(e.target.value)}
            />
            Não informar
          </label>
        </div>

        <input className='input-user'
          type='text'
          placeholder='Email'
          onChange={(event) => {
            setNewEmail(event.target.value)
          }} />

        <input className='input-user'
          type='password'
          autoComplete='current-password'
          placeholder='Senha'
          onChange={(event) => {
            setNewPassword(event.target.value)
          }}
        />

        <label style={{ marginBottom: '30px' }}>
          <h3>JLPT Level:</h3>
          <select className='hover-option' name='JLPT' onChange={(e) => setNewJlpt(e.target.value)}>
            <option value='default'>Default</option>
            <option value='N1'>N1</option>
            <option value='N2'>N2</option>
            <option value='N3'>N3</option>
            <option value='N4'>N4</option>
            <option value='N5'>N5</option>
          </select>
        </label>

        <button
          className='button-update'
          onClick={upUsers}>
          Alterar
        </button>

        <button
          className='button-delete'>
          Deletar
        </button>
      </div>

    </div>
  )
}

export default Update
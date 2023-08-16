import React, { useState } from 'react'
import NavBar from '../nav/Nav'
import '../portfolio/Portfolio.css'
import './CreditsPage.css'
import { Link } from 'react-router-dom'
import { itens } from './CreditsPageItens'

const CreditsPage = () => {
  const [carouselIndices, setCarouselIndices] = useState(itens.map(() => 0))

  const previousImage = (index) => {
    setCarouselIndices((prevIndices) => {
      const newIndices = [...prevIndices]
      newIndices[index] = (newIndices[index] - 1 + itens[index].img.length) % itens[index].img.length
      return newIndices
    })
  }

  const nextImage = (index) => {
    setCarouselIndices((prevIndices) => {
      const newIndices = [...prevIndices]
      newIndices[index] = (newIndices[index] + 1) % itens[index].img.length
      return newIndices
    })
  }

  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <div className='title-name'>
        <h1>Crédito das imagens</h1>
        <p style={{ textAlign: 'center' }}>Imagens usadas no Site</p>
      </div>
      <div className='main-itens-credits'>
        {itens.map((importPort, index) => (
          <div key={importPort.id} className='card-space-img'>
            <div className='img-space-credits'>
              <img src={importPort.img[carouselIndices[index]]} alt='Imagem do portfólio' />
              <div className='info-card-credits '>
                <h1>{importPort.name}</h1>
                <p>{importPort.info}</p>
                <hr />
                <button onClick={() => previousImage(index)} className='button-card'>
                  <i class="fa-solid fa-arrow-left"></i>
                </button>
                <Link to={importPort.link} target='react/jsx-no-target-blank'>
                  <button className='button-card' ><i class="fa-solid fa-image"></i></button>
                </Link>
                <button onClick={() => nextImage(index)} className='button-card'>
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}

export default CreditsPage

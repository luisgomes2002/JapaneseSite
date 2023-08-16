import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <section>
          <div className='social-icons'>
            <Link to='https://www.instagram.com/_gomesluis/' className='social-icon--link' target='react/jsx-no-target-blank'
            ><i className='fa-brands fa-instagram'></i></Link>
            <Link to='https://twitter.com/SAiForaMalucoXD' className='social-icon--link' target='react/jsx-no-target-blank'
            ><i className='fa-brands fa-twitter'></i></Link>
            <Link to='https://www.linkedin.com/in/luis-gomes-8462b321a/' className='social-icon--link' target='react/jsx-no-target-blank'
            ><i className='fa-brands fa-linkedin'></i></Link>
            <Link to='https://github.com/luisgomes2002' className='social-icon--link' target='react/jsx-no-target-blank'
            ><i className='fa-brands fa-github'></i></Link>
          </div>
          <div className='social-media--wrap'>
            <div className='footer-logo'>
              <Link to='/' id='footer-logo'>Murasaki</Link>
            </div>
            <p className='website-rights'>© 2023. Murasaki</p>
          </div>
          <div className='creditos'>
            <p>
              <Link to='/creditsPage'>Créditos das imagens ・</Link>
              <Link to='/portfolio'> Murasaki Products</Link>
            </p>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer
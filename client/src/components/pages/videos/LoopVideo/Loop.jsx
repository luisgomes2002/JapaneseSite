import { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2'
import { videoAbout } from '../JlptVideosEx';
import { Link } from 'react-router-dom';
import './Loop.css'

class Loop extends Component {
  render() {
    return <div>
      {
        videoAbout.map(dados =>
          <div key={dados.id} className='video-space'>
            <Link to={dados.videoUrl} target='_blank'><img src={dados.imagem} alt='' /></Link>
            <Link to={dados.videoUrl} target='_blank'>
              <h3>{dados.title}</h3>
              <p>{dados.description}</p>
            </Link>
          </div>
        )
      }
    </div>
  }
}

export const VideoList = ({ videos, emptyHeading }) => {
  videos = videoAbout.length
  const count = videos;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? 'Vídeos' : 'Vídeo';
    heading = count + ' ' + noun;
  }
  return (
    <section>
      <div className='video-container'>
        <h2>{heading}</h2>
        <Scrollbars style={{ height: 450 }}>
          <Loop />
        </Scrollbars>
      </div>
    </section>
  );
}


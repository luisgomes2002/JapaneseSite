import { Component } from 'react';
import { videoAbout } from '../JlptVideosEx';
import { Link } from 'react-router-dom';
import './Loop.css'

class Loop extends Component {
  render() {
    return (
      <div>
        <div className='video-container'>
          {videoAbout.map(dados => (
            <div key={dados.id} className='video-space'>
              <div className='grid-item'> 
                <Link to={dados.videoUrl} target='_blank'>
                  <div className="image-thumb--channel">
                    <img src={dados.imagem} alt='' />
                  </div>
                </Link>
                <Link to={dados.videoUrl} target='_blank'>
                  <div className="grid-video-space--info">
                    <img src={dados.imgLogo} alt="" />
                    <h3 className={dados.title.length > 10 ? 'multi-line' : ''}>{dados.title}</h3>
                  </div>  
                  <Link to={dados.linkChannel}><p>{dados.channelName}</p></Link>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
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
    <section className='h2-heading'>
      <h2>{heading}</h2>
      <Loop />     
    </section>
  );
}


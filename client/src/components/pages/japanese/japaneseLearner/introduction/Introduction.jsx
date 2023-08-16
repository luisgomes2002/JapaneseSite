import React from 'react'
import './Introduction.css'
import hiragana from '../../../../../assets/outros/hiragana.png'

const Intro = () => {
  return (
    <div className='intro-japonese'>
      <h2>Introdução</h2>
      <h3>Hiragana, Katakana e Kanji - Os Elementos Fundamentais da Escrita Japonesa</h3>
      <p>A escrita japonesa é uma forma fascinante de expressão que incorpora três sistemas principais:
        Hiragana, Katakana e Kanji. Esses três elementos são fundamentais para a compreensão e a comunicação na língua japonesa,
        cada um desempenhando um papel único e desafiador.
      </p>
      <div className='gird-intro-hiragana'>
        <p>Hiragana é um dos primeiros sistemas de escrita que as crianças japonesas aprendem.
          Ele consiste em 46 caracteres fonéticos que representam os sons básicos da língua.
          O Hiragana é utilizado para escrever palavras japonesas nativas, sufixos gramaticais
          e também pode ser utilizado para representar palavras estrangeiras.
          É uma forma cursiva e fluida de escrita, proporcionando uma base essencial para a compreensão da língua japonesa.
        </p>
        <img src={hiragana} />
      </div>
      <div>
        <p>
          Katakana, por sua vez, é semelhante ao Hiragana em termos de estrutura, mas é usado para escrever palavras estrangeiras, nomes próprios estrangeiros e onomatopeias. É mais angular e com traços retos em comparação com o Hiragana, o que lhe confere uma aparência mais rígida. O Katakana desempenha um papel importante na incorporação de palavras estrangeiras no idioma japonês e na comunicação moderna.

          Por fim, temos o Kanji, um sistema de escrita baseado em caracteres chineses. O Kanji é composto por milhares de caracteres, cada um representando um conceito ou uma palavra específica. Embora seja o mais complexo dos três sistemas de escrita, o Kanji é amplamente utilizado na escrita formal, como em documentos, livros e jornais. Dominar o Kanji é um desafio considerável, pois requer conhecimento e compreensão dos diversos caracteres e suas combinações.

          A combinação harmoniosa desses três sistemas de escrita - Hiragana, Katakana e Kanji - é essencial para uma comunicação eficaz em japonês. Aprender e dominar esses elementos proporciona aos falantes da língua japonesa uma ampla gama de possibilidades para se expressar e compreender a rica cultura e história do Japão.

          No decorrer desta conversa, estarei aqui para ajudar a esclarecer dúvidas e fornecer mais informações sobre cada um desses sistemas de escrita, bem como suas aplicações e peculiaridades.
        </p>
      </div>
    </div>
  )
}

export default Intro
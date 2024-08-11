import { Link } from "react-router-dom";
import { VideoList } from "../../videos/loopVideo/Loop.jsx";
import japanCulture from "../../../../assets/JLPT/japanCulture.jpg";
import { IntroductionArea, Jlpthome, PageArea } from "./JlptStyled.jsx";

function JlptHome() {
  return (
    <>
      <PageArea>
        <h1>JLPT</h1>
        <Jlpthome>
          <IntroductionArea>
            <h2>Introdução</h2>
            <h3 style={{ textAlign: "left" }}>
              O JLPT (Teste de Proficiência em Língua Japonesa ou
              日本語能力試験) é uma avaliação de proficiência em japonês que
              consiste em cinco níveis diferentes. Anteriormente, a prova era
              composta por quatro níveis, mas um quinto nível foi adicionado
              alguns anos atrás. Os níveis do JLPT vão do N5 ao N1, permitindo
              que cada pessoa escolha o nível que deseja realizar. O exame do
              JLPT é realizado uma ou duas vezes por ano, dependendo da região.
              Se você tem interesse em trabalhar no Japão, é importante ter em
              mente que a maioria das oportunidades de trabalho exigirá, no
              mínimo, o N2. Para posições que envolvam comunicação intensiva com
              pessoas, o nível N1 é geralmente necessário. Para mais informações
              sobre trabalho no Japão, você pode consultar{" "}
              <Link to="/trabalho" target="_blank">
                este link
              </Link>
              . No entanto, aprender japonês não é uma tarefa fácil, é um
              desafio árduo que requer muito esforço. Leva muito tempo para
              alcançar fluência. Neste vídeo, você pode ter uma ideia de quanto
              tempo as pessoas levaram para alcançar o nível N1.
            </h3>
          </IntroductionArea>
          <iframe
            width="559"
            height="310"
            src="https://www.youtube.com/embed/VBQSbKnuXQ4"
            title="How did you pass JLPT N1?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Jlpthome>
        <div className="center-items">
          <h1>Níveis do JLPT</h1>
          <div className="grid-img">
            <div>
              <img src={japanCulture} alt="" />
              <p className="p-center">(imagem: Pixabay)</p>
            </div>
            <div style={{ padding: "40px" }}>
              <h3 style={{ textAlign: "left" }}>
                A prova é dividida em cinco níveis de proficiência, sendo o N5 o
                mais básico e o N1 o mais avançado. Para aqueles interessados em
                aprender japonês para visitar o Japão, ter um nível N5 ou N4 já
                proporciona uma experiência mais confortável, permitindo
                realizar atividades simples, como ir a restaurantes, fazer
                check-in em hotéis e outras tarefas cotidianas. No entanto, se o
                objetivo for ter conversações com nativos ou compreender a
                cultura japonesa em um nível mais profundo, é recomendado ter,
                pelo menos, um nível equivalente ao N3. Considera-se que
                qualquer pessoa com o nível N3 já seja um bom falante de
                japonês, e alguns professores acreditam que esses indivíduos
                estão aptos a ensinar o idioma, uma vez que possuem uma sólida
                base na língua.
              </h3>
            </div>
          </div>
          <div className="jlpt-about">
            <h3 className="mb-5">
              No entanto, se o seu objetivo é trabalhar no Japão, é importante
              saber que a maioria das empresas exige um nível mínimo comprovado
              de N2, exceto algumas empresas de TI que, às vezes, priorizam um
              bom domínio da língua inglesa. No entanto, vamos ser realistas: se
              você deseja construir uma vida em outro país, é essencial aprender
              o idioma por seu próprio benefício. Isso facilitará a resolução de
              questões burocráticas e permitirá que você compre alimentos em uma
              loja de conveniência (konbini) sem depender de ninguém.
            </h3>
            <h1>Pontuação</h1>
            <h3>
              O sistema de pontuação do JLPT funciona da seguinte maneira: a
              pontuação geral varia de 0 a 180 pontos para todos os níveis. O
              que difere é a nota de corte e a distribuição de pontos em cada
              área.
            </h3>
            <h3>
              A tabela a seguir apresenta informações fundamentais sobre cada
              nível da prova:
            </h3>
          </div>
        </div>
        <div className="table-jlpt">
          <div className="table-notas">
            <div>
              <thead>
                <tr>
                  <th style={{ textAlign: "center" }}>Nível</th>
                  <th style={{ textAlign: "center" }}>Pontuação Global</th>
                  <th style={{ textAlign: "center" }} colSpan={3}>
                    Pontuação de cada divisão{" "}
                  </th>
                  {/* <th style={{ textAlign: 'center' }}>Conteúdo da prova</th>
                    <th style={{ textAlign: 'center' }}>Tempo</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <br />
                    N5
                  </td>
                  <td>
                    <br />
                    Nota de Corte 80 Pontos
                  </td>
                  <td colSpan={2}>
                    Conhecimento do idioma <br />
                    (escrita, vocabulário, gramática) / Compreensão do texto{" "}
                    <br />
                    <b>
                      {" "}
                      0 a 120 pontos / nota de corte de 38 pontos <br /> 0 a 60
                      pontos / nota de corte de 19 pontos
                    </b>
                  </td>
                  <td>
                    Compreensão auditiva <br />{" "}
                    <b>0 a 60 pontos / nota de corte 19 pontos</b>
                  </td>
                  {/* <td>Vocabulário <br /> Gramática <br /> Leitura Compreensão Oral</td>
                    <td>25 minutos <br /> 50 minutos <br /> 30 minutos</td> */}
                </tr>
                <tr>
                  <td>
                    <br />
                    N4
                  </td>
                  <td>
                    <br />
                    Nota de Corte 90 Pontos
                  </td>
                  <td colSpan={2}>
                    Conhecimento do idioma <br />
                    (escrita, vocabulário, gramática) / Compreensão do texto{" "}
                    <br />
                    <b>
                      {" "}
                      0 a 120 pontos / nota de corte de 38 pontos <br /> 0 a 60
                      pontos / nota de corte de 19 pontos
                    </b>
                  </td>
                  <td>
                    Compreensão auditiva <br />{" "}
                    <b>0 a 60 pontos / nota de corte 19 pontos</b>
                  </td>
                  {/* <td>Vocabulário <br />Gramática <br /> Leitura Compreensão Oral</td>
                    <td>30 minutos <br /> 60 minutos <br /> 35 minutos</td> */}
                </tr>
                <tr>
                  <td>
                    <br />
                    N3
                  </td>
                  <td>
                    <br />
                    Nota de Corte 95 Pontos
                  </td>
                  <td>
                    Conhecimento do idioma (escrita, vocabulário, gramática){" "}
                    <br /> <b>0 a 60 pontos / nota de corte 19 pontos</b>
                  </td>
                  <td>
                    Compreensão do texto <br />{" "}
                    <b>0 a 60 pontos / nota de corte 19 pontos</b>
                  </td>
                  <td>
                    Conhecimento Compreensão auditiva <br />{" "}
                    <b>0 a 60 pontos / nota de corte 19 pontos</b>
                  </td>
                  {/* <td>Vocabulário <br />Gramática <br /> Leitura Compreensão Oral</td>
                    <td>30 minutos <br /> 70 minutos <br /> 40 minutos</td> */}
                </tr>
                <tr>
                  <td>N2</td>
                  <td>Nota de Corte 90 Pontos</td>
                  <td>
                    Conhecimento do idioma (escrita, vocabulário, gramática){" "}
                    <br /> <b>0 a 60 pontos / nota de corte 19 pontos</b>
                  </td>
                  <td>
                    Compreensão do texto <br />{" "}
                    <b>0 a 60 pontos / nota de corte 19 pontos</b>
                  </td>
                  <td>
                    Conhecimento Compreensão auditiva <br />{" "}
                    <b>0 a 60 pontos / nota de corte 19 pontos</b>
                  </td>
                  {/* <td>Vocabulário / Gramática e Leitura <br /> Compreensão Oral</td>
                    <td>105 minutos <br /> 50 minutos</td> */}
                </tr>
                <tr>
                  <td>N1</td>
                  <td>Nota de Corte 100 Pontos</td>
                  <td>
                    Conhecimento do idioma (escrita, vocabulário, gramática){" "}
                    <br /> <b>0 a 60 pontos / nota de corte 19 pontos</b>
                  </td>
                  <td>
                    Compreensão do texto <br />{" "}
                    <b>0 a 60 pontos / nota de corte 19 pontos</b>
                  </td>
                  <td>
                    Conhecimento Compreensão auditiva <br />{" "}
                    <b>0 a 60 pontos / nota de corte 19 pontos</b>
                  </td>
                  {/* <td>Vocabulário / Gramática e Leitura <br /> Compreensão Oral</td>
                    <td>110 minutos <br /> 60 minutos</td> */}
                </tr>
              </tbody>
            </div>
          </div>
          <h3>
            Infomações mais detalhada neste site
            <Link to="https://fjsp.org.br/wp-content/uploads/2011/04/jlpt_panfleto_pt.pdf">
              {" "}
              Página 11 P5
            </Link>
          </h3>
          <h3>
            Todos os participantes do exame receberão o comunicado de aprovação
            ou reprovação em um prazo de um a dois meses após a realização da
            prova. Aqueles que forem aprovados receberão um certificado
            diretamente em suas residências. É importante ressaltar que a
            entrega do certificado pode levar mais de um mês.
          </h3>
        </div>
        <div>
          <div className="jlptlist-content">
            <h1>Valores e localizações</h1>
            <h3>
              O exame do JPLT é realizado em todo o mundo, com a Ásia sendo o
              continente que conta com o maior número de locais de aplicação. Em
              cada país, há um preço específico para a inscrição no exame. Para
              consultar a lista de locais de realização da prova, você pode
              acessar o seguinte link{" "}
              <Link
                to="https://www.jlpt.jp/e/application/overseas_list.html"
                target="_blank"
              >
                SITE
              </Link>
            </h3>
          </div>
          <div className="grid-card ">
            <div className="tabs-config m-3">
              <h2>Valor</h2>
              <p>
                Cada nível do JLPT tem o seu valor de inscrição sendo eles
                respectivamente:
              </p>
              <li> Preço do N5: R$110,00 </li>
              <li> Preço do N4: R$120,00 </li>
              <li> Preço do N3: R$130,00 </li>
              <li> Preço do N2: R$140,00 </li>
              <li> Preço do N1: R$170,00 </li>
            </div>
            <div className="tabs-config">
              <h2>Localidades</h2>
              <p>
                No Brasil, a prova do JPLT é realizada em um número limitado de
                cidades. Algumas dessas cidades oferecem a prova uma vez por
                ano, enquanto outras a disponibilizam duas vezes ao longo do
                ano.
              </p>
              <p></p>
              <li>
                São Paulo / Rio de Janeiro / Porto Alegre / Brasília : 2 Provas
              </li>
              <li>Londrina / Belém / Salvador / Curitiba / Manaus : 1 Prova</li>
            </div>
          </div>
          <div className="link-consulado">
            <h3>
              Para saber qual é o consulado da sua região acesse o link abaixo.
            </h3>
            <Link
              to="https://www.br.emb-japan.go.jp/itpr_pt/enderecos_uteis.html"
              target="_blank"
            >
              SITE DA EMBAIXADA DO JAPÃO NO BARSIL
            </Link>
          </div>
          <div className="jlptlist-content">
            <h1>Vídeos</h1>
            <h3>
              Amplie seu conhecimento sobre o JLPT assistindo aos vídeos abaixo.
            </h3>
          </div>
        </div>
      </PageArea>
      <div className="video-grid">
        <VideoList />
      </div>
    </>
  );
}

function Jlpt() {
  return (
    <div className="background-img">
      <JlptHome />
    </div>
  );
}

export default Jlpt;

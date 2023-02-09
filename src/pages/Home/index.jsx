import * as React from 'react';
import Typography from '@mui/material/Typography';
import HeaderHome from './../../Components/Header/headerHome';
import ImgCircularAberto from '../../Assets/CircularAberto.jpg'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DivBar, ImageDiv, ContainerInferior, Content, ButtonBar, Content1111, Content1111AAA, Content1111BBB } from './styles';

function HomePage() {

  return (
    <HeaderHome>
      <ImageDiv>
        <img
          src={`${ImgCircularAberto}`}
          srcSet={`${ImgCircularAberto} 2x`}
          alt={"Imagem"}
          loading="lazy"
        />
      </ImageDiv>
      <ContainerInferior>
        <Content>
          <DivBar>
            <h2>ENTENDEMOS A NESSECIDADE DA SUA CONSTRUÇÃO</h2>
            <ButtonBar id='buttonDivBar'><strong>FALE CONOSCO</strong></ButtonBar>
          </DivBar>
          <Content1111>
            <Content1111AAA>
              <div className='h3'><p>SOBRE NÓS</p></div>
              <div><h1>A MAIS DE 50 ANOS TRABALHANDO POR VOCÊ</h1></div>
              <div><p>Espaçadores Peri atua na injeção de plásticos desde 1962.
                Em 2002 inserimos a linha de espaçadores para concreto armado.
                E assim passamos a atender todo seguimento da construção civil
                priorizando sempre a segurança do meio ambiente.
              </p></div>
            </Content1111AAA>
            <Content1111BBB>
              <div className='divNossosValoes'>
                <h1 id='h1'>NOSSOS VALORES</h1>
              </div>
              <div className='accordion'>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Accordion 1</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Accordion 2</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion disabled>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography>Disabled Accordion</Typography>
                  </AccordionSummary>
                </Accordion>
              </div>
            </Content1111BBB>
          </Content1111>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
            fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
            aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
            cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
            at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
            Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
            numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
            asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
            assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
            soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
            ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
            soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
            Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
            delectus quo eius exercitationem tempore. Delectus sapiente, provident
            corporis dolorum quibusdam aut beatae repellendus est labore quisquam
            praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
            deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
            fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
            recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
            debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
            praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
            voluptate iure labore, repellendus beatae quia unde est aliquid dolor
            molestias libero. Reiciendis similique exercitationem consequatur, nobis
            placeat illo laudantium! Enim perferendis nulla soluta magni error,
            provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
            iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
            Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
            reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
            cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
            consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
            Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
            dolores sunt inventore perferendis, aut sapiente modi nesciunt.
          </Typography>
        </Content>
      </ContainerInferior>

    </HeaderHome>
  );
};

export default HomePage;
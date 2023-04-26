import { Tecs } from "../Tecs";
import * as C from "./style";

export const Sidebar = () => {

  const Imagem = 'https://github.com/mascou9090.png';

  return (
    <C.Container>
      <C.ImgS>
        <img src={Imagem} alt="Foto de perfil" />
      </C.ImgS>
      <C.AboutMe>
        <h2>Marcondes F Pinheiro</h2>
        <p>Desenvolvedor FullStack</p>
        <Tecs />
      </C.AboutMe>
      <C.NevDiv>
        <p>Em construção</p>
      </C.NevDiv>
    </C.Container>
  );
};

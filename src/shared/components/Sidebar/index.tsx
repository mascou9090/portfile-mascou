import { Loader } from "../Loader";
import { Tecs } from "../Tecs";
import * as C from "./style";

export const Sidebar = () => {
  return (
    <C.Container>
      <C.ImgS>
        {
          <img src="https://github.com/mascou9090.png" alt="Foto de perfil" /> ? <img src="https://github.com/mascou9090.png" alt="Foto de perfil" /> : <Loader />
        }
      </C.ImgS>
      <C.AboutMe>
        <h2>Marcondes F Pinheiro</h2>
        <p>Desenvolvedor FullStack</p>
        <Tecs />
      </C.AboutMe>
    </C.Container>
  );
};

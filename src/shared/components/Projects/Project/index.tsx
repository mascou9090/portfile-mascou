import * as C from './style';
import { PropsProj } from '../../../types';

export const Project = ({src, urlDirect}: PropsProj) => {
  return (
    <C.Container>
      <a href={urlDirect}>
      <img src={src} alt="Imagem fisica de projetos pessoais"/>
      </a>
    </C.Container>
  )
}

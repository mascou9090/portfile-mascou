import * as C from './style';
import { Tec } from './Tec';

export const Tecs = () => {

  const imgs = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg'
  ];

  return (
    <C.Container>
      <h2>Tecnologias</h2>
      <Tec url={imgs[0]}/>
      <Tec url={imgs[8]}/>
      <Tec url={imgs[1]}/>
      <Tec url={imgs[9]}/>
      <Tec url={imgs[7]}/>
      <Tec url={imgs[2]}/>
      <Tec url={imgs[4]}/>
      <Tec url={imgs[5]}/>
      <Tec url={imgs[6]}/>
      <Tec url={imgs[11]}/>
      <Tec url={imgs[3]}/>
      <Tec url={imgs[10]}/>
    </C.Container>
  )
}

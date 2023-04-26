import { Project } from './Project';
import * as C from './style';
import  { default as Financ }  from '../../Assets/img/financ.png';
import { default as GitFind } from '../../Assets/img/gitFind.png';
import { default as CodeLeap } from '../../Assets/img/codleap.png';
import { default as DAmora } from '../../Assets/img/DAmora.png';
import { default as PontoGo } from '../../Assets/img/PontoGo.png';

const financUrl = 'https://financas-virid.vercel.app/';
const gitFindUrl = 'https://git-find-cyan.vercel.app/';
const coldLeap = 'https://colder-test.vercel.app/';
const dAmora = 'https://d-amora.vercel.app/';
const pontoGo = 'https://ponto-go-teste.vercel.app/';

export const Projects = () => {
  return (
    <C.Container>
         < Project src={Financ} urlDirect={financUrl}/>
         < Project src={GitFind} urlDirect={gitFindUrl}/>
         < Project src={CodeLeap} urlDirect={coldLeap}/>
         < Project src={DAmora} urlDirect={dAmora}/>
         < Project src={PontoGo} urlDirect={pontoGo}/>
    </C.Container>
  )
}

import { Project } from './Project';
import * as C from './style';
import  { default as Financ }  from '../../Assets/img/financ.png';
import { default as GitFind } from '../../Assets/img/gitFind.png';

const financUrl = 'https://financas-virid.vercel.app/';
const gitFindUrl = 'https://git-find-cyan.vercel.app/';

export const Projects = () => {
  return (
    <C.Container>
         < Project src={Financ} urlDirect={financUrl}/>
         < Project src={GitFind} urlDirect={gitFindUrl}/>
    </C.Container>
  )
}

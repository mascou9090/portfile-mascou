import * as C from './style';

export const Header = () => {
  return (
    <C.Header>
      <ul>
        <li id="HOME">
          <C.LinkS to="/">
            Home
          </C.LinkS>
        </li>
        <li id="PROJETOS">
          <C.LinkS to="projetos">
            Projetos
          </C.LinkS>
        </li>
        <li id="CONTATO">
          <C.LinkS to="contato">
            Contatos
          </C.LinkS>
        </li>
      </ul>
    </C.Header>
  )
}
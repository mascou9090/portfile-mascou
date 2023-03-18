import * as C from './style';
import { SlSocialLinkedin } from 'react-icons/sl'
import { BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { TbPhone } from 'react-icons/tb';


export const Contact = () => {

  return (
    <C.Container>
      <h2>Contatos</h2>
      <C.Contacts>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/marcondes-%F0%9F%8F%B3%EF%B8%8F%E2%80%8D%F0%9F%8C%88-48aa231ab/">
              <SlSocialLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/mascou9090">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="mailto:marcondessa@gmail.com">
              <HiOutlineMail />
            </a>
          </li>
          <li>
            <a href='https://api.whatsapp.com/send?phone=5585999504253&text=Ol%C3%A1,%20tudo%20bem?%0AVim%20direto%20do%20seu%20portf%C3%B3lio.%0A'>
            <TbPhone />
            </a>
          </li>
        </ul>
      </C.Contacts>
    </C.Container>
  )
}

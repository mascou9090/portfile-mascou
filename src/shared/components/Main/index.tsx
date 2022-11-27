import { Rotas } from "../../../routes"
import { Sidebar } from "../Sidebar"
import * as C from "./style"

export const Main = () => {
  return (
    <C.Container>
      <Sidebar />
      <C.Section>
        <Rotas/>
      </C.Section>
    </C.Container>
  )
}

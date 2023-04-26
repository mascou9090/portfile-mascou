import { About } from "../About"
import { Sidebar } from "../Sidebar"
import * as C from "./style"

export const Main = () => {
  return (
    <C.Container>
      <Sidebar />
      <About />
    </C.Container>
  )
}

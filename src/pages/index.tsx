import { Outlet } from "react-router-dom"
import { Footer } from "../shared/components/Footer"
import { Header } from "../shared/components/Header"
import { Main } from "../shared/components/Main"

export const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

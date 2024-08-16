import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Whatsap from "../../assets/whatsapp.png";
import Email from "../../assets/email.png";
import { Footer } from "../footer";
import { Header } from "../header";

export default function Contact() {
    return (
        <div className="h-full sm:h-screen bg-gradient-to-l from-purple-600 to-violet-950 text-black">
            <Header />
            <div className="">
                <div className="justify-center flex space-x-8 flex-wrap">
                    <a href="https://github.com/mascou9090">
                        <img className="w-16 h-16 hover:opacity-50 duration-300 cursor-pointer" src={Github.src} alt="Github icon Navgation" />
                    </a>
                    <a href="https://www.linkedin.com/in/marcondes-pinheiro-48aa231ab/">
                        <img className="w-16 h-16 hover:opacity-50 duration-300 cursor-pointer" src={Linkedin.src} alt="Github icon Navgation" />
                    </a>
                    <a href="https://www.instagram.com/marcondes_soeu/">
                        <img className="w-16 h-16 hover:opacity-50 duration-300 cursor-pointer" src={Instagram.src} alt="Github icon Navgation" />
                    </a>
                    <a href="mailto:marcondessam@gmail.com">
                        <img className="w-16 h-16 hover:opacity-50 duration-300 cursor-pointer" src={Email.src} alt="Github icon Navgation" />
                    </a>
                    <a href="https://wa.me//5585999504253?text=Ola%20Dev%20Marcondes%20venho%20direcionado%20do%20seu%20site!">
                        <img className="w-16 h-16 hover:opacity-50 duration-300 cursor-pointer" src={Whatsap.src} alt="Github icon Navgation" />
                    </a>
                </div>
                <div className="p-10 flex flex-col text-center justify-center">
                    <h1 className="text-3xl">Entre em contato em qualquer um desses canais</h1>
                    <p className="text-md">Está disponível Linkedin, Email e o Whatsapp para situações mais ágeis.</p>
                    <p className="text-md">Caso queira dar uma olhada nos meus códigos, também deixei meu <a className="hover:text-pink-300 font-bold duration-300" href="https://github.com/mascou9090">Github</a>.</p>
                </div>
                <div className="flex justify-center">
                    <button className="border-none my-20 mx-4 bg-pink-400 w-60 h-14 rounded-lg hover:opacity-70 duration-300 cursor-pointer hover:text-red-600 font-bold">Curriculun Download</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
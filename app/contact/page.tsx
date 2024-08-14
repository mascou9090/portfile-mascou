import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Whatsap from "../../assets/whatsapp.png";
import Email from "../../assets/email.png";
import { Footer } from "../footer";
import { Header } from "../header";

export default function Contact() {
    return (
        <div className="h-full bg-gradient-to-l from-purple-600 to-violet-950">
            <Header />
            <div className="">
                <div className="justify-center flex space-x-8 flex-wrap">
                    <img className="w-16 h-16 hover:opacity-30 duration-300 cursor-not-allowed" src={Instagram.src} alt="Instagram Icon Navgation" />
                    <img className="w-16 h-16 hover:opacity-30 duration-300 cursor-not-allowed" src={Linkedin.src} alt="Linkdin Icon Navgation" />
                    <img className="w-16 h-16 hover:opacity-30 duration-300 cursor-not-allowed" src={Whatsap.src} alt="Whatsao Icon Navgation" />
                    <img className="w-16 h-16 hover:opacity-30 duration-300 cursor-not-allowed" src={Email.src} alt="Email Icon Navgation" />
                    <a href="https://github.com/mascou9090">
                        <img className="w-20 h-20 hover:opacity-30 duration-300 cursor-pointer" src={Github.src} alt="Github icon Navgation" />
                    </a>
                </div>
                <div className="p-10 flex flex-col text-center justify-center">
                    <h1 className="text-3xl">Entre em contato em qualquer um desses canais</h1>
                    <p className="text-md">Está disponível Linkedin, Email e o Whatsapp para situações mais ágeis.</p>
                    <p className="text-md">Caso queira dar uma olhada nos meus códigos, também deixei meu <a className="hover:text-red-500 font-bold duration-300" href="https://github.com/mascou9090">Github</a>.</p>
                </div>
                <div className="flex justify-center">
                    <button className="border-none my-20 mx-4 bg-pink-400 w-60 h-14 rounded-lg hover:opacity-70 duration-300 cursor-pointer hover:text-red-600 font-bold">Curriculun Download</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
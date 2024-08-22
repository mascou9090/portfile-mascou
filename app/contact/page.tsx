import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Whatsap from "../../assets/whatsapp.png";
import Email from "../../assets/email.png";
import { Footer } from "../footer";
import { Header } from "../header";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="h-full sm:h-screen bg-gradient-to-l dark:from-purple-600 dark:to-violet-950 bg-gray-300 text-black">
            <Header />
            <div className="h-[70%]">
                <div className="justify-center flex space-x-8 flex-wrap">
                    <a href="https://github.com/mascou9090">
                        <img className="sm:w-16 sm:h-16 w-10 h-10 hover:opacity-50 duration-300 cursor-pointer" src={Github.src} alt="Github icon Navgation" />
                    </a>
                    <a href="https://www.linkedin.com/in/marcondes-pinheiro-48aa231ab/">
                        <img className="sm:w-16 sm:h-16 w-10 h-10 hover:opacity-50 duration-300 cursor-pointer" src={Linkedin.src} alt="Github icon Navgation" />
                    </a>
                    <a href="https://www.instagram.com/marcondes_soeu/">
                        <img className="sm:w-16 sm:h-16 w-10 h-10 hover:opacity-50 duration-300 cursor-pointer" src={Instagram.src} alt="Github icon Navgation" />
                    </a>
                    <a href="mailto:marcondessam@gmail.com">
                        <img className="sm:w-16 sm:h-16 w-10 h-10 hover:opacity-50 duration-300 cursor-pointer" src={Email.src} alt="Github icon Navgation" />
                    </a>
                    <a href="https://wa.me//5585999504253?text=Ola%20Dev%20Marcondes%20venho%20direcionado%20do%20seu%20site!">
                        <img className="sm:w-16 sm:h-16 w-10 h-10 hover:opacity-50 duration-300 cursor-pointer" src={Whatsap.src} alt="Github icon Navgation" />
                    </a>
                </div>
                <div className="p-10 flex flex-col text-center justify-center">
                    <h1 className="text-3xl">Can you talk to me? <br />
                        <span className="font-bold">
                            Please contact me on any of these channels
                        </span>
                    </h1>
                    <p className="text-md">Linkedin, Email and Whatsapp are available for more agile situations..</p>
                    <p className="text-md">In case you want to take a look at my codes, I also left my <a className="hover:opacity-40 font-bold duration-300" href="https://github.com/mascou9090">Github</a>.</p>
                </div>
                <div className="flex justify-center">
                    <Link href="https://drive.google.com/file/d/1S5EBi9vDpandKnpjOQ6cxiabTFW2974R/view?usp=drive_link" passHref>
                        <button className="border-none my-20 mx-4 w-60 h-14 rounded-lg dark:bg-purple-700 dark:text-gray-400 bg-sky-700 hover:opacity-70 duration-300 cursor-pointer hover:text-red-300 font-bold">Curriculun Download</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

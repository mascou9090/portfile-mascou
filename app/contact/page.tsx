import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Whatsap from "../../assets/whatsapp.png";
import Email from "../../assets/email.png";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="">
            <div className="">
                <div className="justify-center animate-content-second flex space-x-8">
                    <a href="https://github.com/mascou9090">
                        <img className="sm:w-16 sm:h-16 w-10 h-10 hover:opacity-30 duration-500 cursor-pointer " src={Github.src} alt="Github icon Navgation" />
                    </a>
                    <a href="https://www.linkedin.com/in/marcondes-pinheiro-48aa231ab/">
                        <img className="sm:w-16 sm:h-16 w-10 h-10 hover:opacity-30 duration-500 cursor-pointer" src={Linkedin.src} alt="Github icon Navgation" />
                    </a>
                    <a href="https://www.instagram.com/marcondes_soeu/">
                        <img className="sm:w-16 sm:h-16 w-10 h-10 hover:opacity-30 duration-500 cursor-pointer" src={Instagram.src} alt="Github icon Navgation" />
                    </a>
                    <a href="mailto:marcondessam@gmail.com">
                        <img className="sm:w-16 sm:h-16 w-10 h-10 hover:opacity-30 duration-500 cursor-pointer" src={Email.src} alt="Github icon Navgation" />
                    </a>
                    <a href="https://wa.me//5585999504253?text=Ola%20Dev%20Marcondes%20venho%20direcionado%20do%20seu%20site!">
                        <img className="sm:w-16 sm:h-16 w-10 h-10 hover:opacity-30 duration-500 cursor-pointer" src={Whatsap.src} alt="Github icon Navgation" />
                    </a>
                </div>
                <div className="px-4 py-10 animate-content-main flex flex-col text-center justify-center">
                    <h1 className="text-3xl">Can you talk to me? <br />
                        <span className="font-bold">
                            Please contact me on any of these channels
                        </span>
                    </h1>
                    <p className="text-md">Linkedin, Email and Whatsapp are available for more agile situations..</p>
                    <p className="text-md">In case you want to take a look at my codes, I also left my <a className="hover:opacity-40 font-bold duration-300" href="https://github.com/mascou9090">Github</a>.</p>
                </div>
                <div className="flex animate-content-main justify-center">
                    <Link href="" passHref>
                        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                        <button className="border-none my-20 mx-4 w-60 h-14 rounded-lg dark:text-gray-300 bg-blue-700 hover:bg-slate-800 hover:text-gray-200 text-gray-800 dark:bg-sky-600 dark:hover:bg-stone-900 duration-300 cursor-not-allowed dark:hover:text-sky-400 font-bold">Curriculun Download</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

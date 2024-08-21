import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
export const Footer = () => {
    return (
        <footer className="justify-center mx-6 border-t-2 text-black flex border-gray-500 p-8 w-auto">

            <div className="md:flex md:space-x-20">
                <p>
                    <strong>© 2022 - 2024</strong>
                    <br />
                    <a className="hover:opacity-40 duration-300 cursor-pointer" href="#">
                        Marcondes FP
                    </a>
                </p>
                <p>
                    <strong>Work</strong>
                    <br />
                    <a className="hover:opacity-40 duration-300 cursor-pointer" href="#">
                        Develep and Logistic
                    </a>
                </p>
                <p><strong>Social</strong>
                    <br />
                    <a className="hover:opacity-40 pr-1 duration-300 cursor-pointer" href="#">
                        Github
                    </a>
                    /
                    <a className="hover:opacity-40 pl-1 duration-300 cursor-pointer" href="">
                        Instagram
                    </a>
                </p>
                <p><strong>Indications</strong>
                    <br />
                    <a className="hover:opacity-40 duration-300 cursor-pointer" href="#">Coments</a>
                </p>
            </div>
            <div className="ml-6 sm:ml-10 sm:flex sm:space-x-4 sm:space-y-0 ">
                <a href="https://github.com/mascou9090">
                    <img className="w-6 h-6 mb-4 hover:opacity-30 duration-300 cursor-pointer" src={Github.src} alt="Github image icon" />
                </a>
                <a href="https://www.instagram.com/marcondes_soeu/">
                    <img className="w-6 h-6 mb-4 hover:opacity-30 duration-300 cursor-pointer" src={Instagram.src} alt="Instagram image icon" />
                </a>
                <a href="https://www.linkedin.com/in/marcondes-pinheiro-48aa231ab/">
                    <img className="w-6 h-6 mb-4 hover:opacity-30 duration-300 cursor-pointer" src={Linkedin.src} alt="Linkedin image icon" />
                </a>
            </div>
        </footer>
    )
}
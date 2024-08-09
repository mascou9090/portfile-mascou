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
                    <a className="hover:text-pink-300 duration-300 cursor-pointer" href="#">
                        Marcondes FP
                    </a>
                </p>
                <p>
                    <strong>Work</strong>
                    <br />
                    <a className="hover:text-pink-300 duration-300 cursor-pointer" href="#">
                        Develep and Logistic
                    </a>
                </p>
                <p><strong>Social</strong>
                    <br />
                    <a className="hover:text-pink-300 pr-1 duration-300 cursor-pointer" href="#">
                        Github
                    </a>
                    /
                    <a className="hover:text-pink-300 pl-1 duration-300 cursor-pointer" href="">
                        Instagram
                    </a>
                </p>
                <p><strong>Indications</strong>
                    <br />
                    <a className="hover:text-pink-300 duration-300 cursor-pointer" href="#">Coments</a>
                </p>
            </div>
            <div className="ml-20 sm:ml-10 sm:flex sm:space-x-4 space-y-2 sm:-space-y-0">
                <img className="w-6 h-6 hover:opacity-30 duration-300 cursor-not-allowed" src={Github.src} alt="Github image icon" />
                <img className="w-6 h-6 hover:opacity-30 duration-300 cursor-not-allowed" src={Instagram.src} alt="Instagram image icon"/>
                <img className="w-6 h-6 hover:opacity-30 duration-300 cursor-not-allowed" src={Linkedin.src} alt="Linkedin image icon" />
            </div>
        </footer>
    )
}
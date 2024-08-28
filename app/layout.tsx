import type { Metadata } from "next";
import Github from "../assets/github.png"
import Instagram from "../assets/instagram.png"
import Linkedin from "../assets/linkedin.png"
import Pincel from "../assets/pincel.png"
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MarcondesFR | Portfile",
  description: "Created for Marcondes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="text-black bg-gradient-to-l dark:from-gray-900 dark:to-gray-800 bg-gray-300">
      <header className="flex w-auto">
            <div className="w-full" >
                <div className="flex justify-start flex-col w-full ml-10 sm:ml-20 mt-8">
                    <Link className="w-80" href="/">
                        <strong className="m-5 text-4xl hover:opacity-40 duration-300 text-black cursor-pointer">
                            Marcondes FP
                        </strong>
                    </Link>
                        <p className="text-black ml-14 font-bold text-sm">Junior Frontend Engineer</p>
                    <div className="ml-6 mb-6">
                        <nav className="list-none duration-300 mt-4 space-x-4 flex text-black font-bold text-md">
                            <li className="after:content-[''] after:duration-500 after:w-[0px] after:h-0.5 after:ease-out after:block after:to-sky-700 after:bg-gradient-to-r after:from-gray-800 hover:after:w-full duration-300 hover:text-sky-700 cursor-pointer">
                                <Link href="/">
                                   Home
                                </Link>

                            </li>
                            <li className="after:content-[''] after:duration-500 after:w-[0px] after:h-0.5 after:ease-out after:block after:to-sky-700 after:bg-gradient-to-r after:from-gray-800 hover:after:w-full duration-300 hover:text-sky-700 cursor-pointer">

                                <Link href="/about">
                                    About
                                </Link></li>
                            <li className="after:content-[''] after:duration-500 after:w-[0px] after:h-0.5 after:ease-out after:block after:to-sky-700 after:bg-gradient-to-r after:from-gray-800 hover:after:w-full duration-300 hover:text-sky-700 cursor-pointer">
                                <Link href="/contact">
                                    Contact
                                </Link></li>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        {children}
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
                    <img className="max-w-6 max-h-6 mb-4 hover:opacity-30 duration-300 cursor-pointer" src={Github.src} alt="Github image icon" />
                </a>
                <a href="https://www.instagram.com/marcondes_soeu/">
                    <img className="max-w-6 max-h-6 mb-4 hover:opacity-30 duration-300 cursor-pointer" src={Instagram.src} alt="Instagram image icon" />
                </a>
                <a href="https://www.linkedin.com/in/marcondes-pinheiro-48aa231ab/">
                    <img className="max-w-6 max-h-6 mb-4 hover:opacity-30 duration-300 cursor-pointer" src={Linkedin.src} alt="Linkedin image icon" />
                </a>
            </div>
        </footer>
      </body>
    </html>
  );
}

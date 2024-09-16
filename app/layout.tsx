import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { GithubIcon } from "./svg/github";
import { LinkdinIcon } from "./svg/linkdin";
import { InstagramIcon } from "./svg/instagram";

const maintFontFamilyRobot = Roboto({
    weight: ['300', '400', '700'],
    subsets: ['latin'],
    variable: '--font-family-robot',
});

export const metadata: Metadata = {
    title: {
        absolute: "",
        default: "Home | Portfile",
        template: "%s | Portfile"
    },
    description: "Created for Marcondes",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className={maintFontFamilyRobot.variable}>
            <body className="dark:text-gray-300 text-black bg-gradient-to-l dark:from-gray-900 dark:to-gray-800 bg-gray-300">
                <header className="flex justify-center lg:ml-28 dark:text-gray-300 text-black sm:justify-start w-auto">
                    <div>
                        <div className="pl-12 w-full sm:ml-20 mt-8 animate-content-second">
                            <Link className="m-auto" href="/">
                                <strong className="sm:text-7xl text-6xl font-light hover:text-sky-700 duration-300 cursor-pointer">
                                    Marcondes FP
                                </strong>
                            </Link>
                            <p className="pl-8 text-2xl">Junior Frontend Engineer</p>
                            <div className="ml-6 mb-6">
                                <nav className="list-none duration-300 mt-4 space-x-4 flex text-md">
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
                <footer className="justify-center space-x-20 mx-6 my-10 border-t-2 dark:text-gray-300 text-black flex border-gray-500 pt-8 w-auto">
                    <div className="md:flex md:space-x-4 justify-center">
                        <p className="text-center">
                            <strong className="">© 2022 - 2024</strong>
                            <br />
                            <a className="hover:text-sky-700   duration-300 cursor-pointer" href="/">
                                Marcondes FP
                            </a>
                        </p>
                        <p className="text-center">
                            <strong>Work</strong>
                            <br />
                            <a className="hover:text-sky-700  duration-300 cursor-pointer" href="/about">
                                Develop / Logistic
                            </a>
                        </p>
                        <p className="text-center"><strong>Social</strong>
                            <br />
                            <a className="hover:text-sky-700  pr-1 duration-300 cursor-pointer" href="https://github.com/mascou9090">
                                Github
                            </a>
                            /
                            <a className="hover:text-sky-700  pl-1 duration-300 cursor-pointer" href="https://www.linkedin.com/in/marcondes-pinheiro-48aa231ab/">
                                Instagram
                            </a>
                        </p>
                        <p className="text-center"><strong>Indications</strong>
                            <br />
                            <a className="hover:text-sky-700 duration-300 cursor-pointer" href="/">Coments</a>
                        </p>
                    </div>
                    <div className="sm:ml-10 sm:flex mt-1 mb-2 sm:space-x-4 sm:space-y-0 ">
                        <a href="https://github.com/mascou9090">
                            <GithubIcon />
                        </a>
                        <a href="https://www.instagram.com/marcondes_soeu/">
                            <InstagramIcon />
                        </a>
                        <a href="https://www.linkedin.com/in/marcondes-pinheiro-48aa231ab/">
                            <LinkdinIcon />
                        </a>
                    </div>
                </footer>
            </body>
        </html>
    );
}

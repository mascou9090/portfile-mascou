'use client'
//import { useEffect } from "react"
import Project from "../project"
import Computer from "../../assets/computer.png"
import Smartphone from "../../assets/smartphone.png"
import Tablet from "../../assets/tablet.png"

export const MainContent = () => {
    return (
        <main className="ml-24 w-[90%] text-black">
            <div className="mt-48">
                <h2 className="text-md dark:text-blue-700 dark:hover:text-pink-300 text-pink-500 hover:text-sky-600 duration-300 cursor-pointer font-bold">HOLLA, MY NAME IS MARCONDES.</h2>
            </div>
            <aside className="mb-10">
                <p className="text-sm w-[60%] sm:text-xl sm:w-[50%]">
                    <strong className="text-2xl sm:text-3xl ">
                        I make websites.
                    </strong> <br />
                    I'm front-end develop in Brasil. <br />
                    I work freelancer. <br />
                    I build pixel-perfect, engaging, and accessible digital experiences. < br />
                    And I work full-time at a logistics company. <br />
                </p>
            </aside>
            <aside className="mb-10 mt-32 space-y-48">
                <div className="w-3/4 sm:m-auto sm:flex">
                    <img className="max-h-60" src={Computer.src} alt="" />
                    <p className="my-36 text-sm"> <strong className="text-lg text-blue-700">Each project is unique</strong>, and I take a pragmatic approach to each job, with the aim of delivering<br /> <span className="text-lg text-slate-600 dark:text-pink-400">the best possible results.</span></p>
                </div>

                <div className="w-3/4 sm:m-auto sm:flex">
                    <img className="sm:mt-10 m-auto max-h-60" src={Smartphone.src} alt="" />
                    <p className="sm:ml-28 my-36">With extensive experience in building complex interfaces,<br /> <strong className="text-blue-700">I am prepared to develop everything from single-page applications to scalable design systems.</strong></p>
                </div>
                <div className="w-3/4 sm:m-auto sm:flex">
                    <img className="max-h-60 m-auto" src={Tablet.src} alt="" />
                    <p className="sm:ml-28 my-36 text-lg"><strong className="text-cyan-700 text-3xl">I can help you </strong>choose the most suitable technology for your project and, although I value good frameworks,<br /> <span className="text-black dark:text-red-400">I guarantee that the technology will always be used with a clear purpose, and not just for fashion.</span></p>
                </div>
            </aside>
            <div className="flex flex-col justify-center">

                <h2 className="text-center text-3xl font-bold m-10 mr-24">Projects</h2>
                <div className="mb-10 mr-12 flex flex-wrap justify-center gap-4">
                    < Project />
                    < Project />
                    < Project />
                    < Project />
                    < Project />
                    < Project />
                    < Project />
                    < Project />
                </div>
            </div>
        </main>
    )
}

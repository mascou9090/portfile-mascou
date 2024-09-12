
import Link from "next/link";
import { GithubIcon } from "../svg/githubBig";
import { EmailIcon } from "../svg/email";
import { InstagramIcon } from "../svg/instagramBig";
import { WhatsappIcon } from "../svg/whatsapp";
import { LinkdinIcon } from "../svg/linkdinBig";

export default function Contact() {
    return (
        <div className="">
                <div className="justify-center animate-content-second flex space-x-8">
                    <a href="https://github.com/mascou9090">
                        <GithubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/marcondes-pinheiro-48aa231ab/">
                        <LinkdinIcon />
                    </a>
                    <a href="https://www.instagram.com/marcondes_soeu/">
                        <InstagramIcon />
                    </a>
                    <a href="mailto:marcondessam@gmail.com">
                        <EmailIcon />
                    </a>
                    <a href="https://wa.me//5585999504253?text=Ola%20Dev%20Marcondes%20venho%20direcionado%20do%20seu%20site!">
                        <WhatsappIcon />
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
                    <Link href="https://drive.google.com/file/d/1HIzHy2kd_HkwvFjTY1PIOCUMISPGRX7L/view?usp=drive_link" passHref>
                        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                        <button className="border-none my-20 mx-4 sm:w-60 w-[350px] h-14 rounded-lg dark:text-gray-300 bg-blue-700 hover:bg-slate-800 hover:text-gray-200 text-gray-800 dark:bg-sky-600 dark:hover:bg-stone-900 duration-300 cursor-pointer dark:hover:text-sky-400 font-bold">Curriculun Download</button>
                    </Link>
                </div>
        </div>
    );
}

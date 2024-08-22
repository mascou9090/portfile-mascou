import Link from "next/link"
import Pincel from "../../assets/pincel.png"
export const Header = () => {
    return (
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
                            <li className="trasition-colors duration-300 hover:underline hover:opacity-40 cursor-pointer">
                                <Link href="/">
                                   Home
                                </Link>

                            </li>
                            <li className="trasition-colors duration-300 hover:opacity-40 hover:underline cursor-pointer">

                                <Link href="/about">
                                    About
                                </Link></li>
                            <li className="trasition-colors duration-300 hover:underline hover:opacity-40 cursor-pointer">
                                <Link href="/contact">
                                    Contact
                                </Link></li>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="flex justify-end">
                <img className="cursor-not-allowed hover:opacity-30 duration-300 w-10 h-10 sm:mr-40 xl:mr-80 my-8 mr-10" src={Pincel.src} alt="brush Image icon" />
            </div>
        </header>
    )
}
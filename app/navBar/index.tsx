import Link from "next/link"

export const NavBar = () => {
    return (
        <div className="">
            <nav className="list-none space-y-32 sm:pt-96 duration-300 w-14 sm:w-36 text-black font-bold text-xl py-80">
                <li className="rotate-90 trasition-colors duration-300 hover:text-red-300 cursor-pointer">Home</li>
                <li className="rotate-90 trasition-colors duration-300 hover:text-red-300 cursor-pointer">About</li>
                <li className="rotate-90 trasition-colors duration-300 hover:text-red-300 cursor-pointer">
                    <Link href="/contact">Contact</Link></li>
            </nav>
        </div>
    )
}
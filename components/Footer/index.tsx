export const Footer = () => {
    return (
        <footer className="justify-center mx-6 border-t-2 border-gray-500 flex p-10 w-auto">

            <div className="flex space-x-6 sm:flex-col">
                <p>
                    <strong>© 2024</strong>
                    <br />
                    <a className="hover:text-gray-400 cursor-pointer" href="#">
                        Marcondes FP
                    </a>
                </p>
                <p>
                    <strong>Work</strong>
                    <br />
                    <a className="hover:text-gray-400 cursor-pointer" href="#">
                        Develep and Logistic
                    </a>
                </p>
                <p><strong>Social</strong>
                    <br />
                    <a className="hover:text-gray-400 pr-1 cursor-pointer" href="#">
                        Github
                    </a>
                    /
                    <a className="hover:text-gray-400 pl-1 cursor-pointer" href="">
                        Instagram
                    </a>
                </p>
                <p><strong>Indications</strong>
                    <br />
                    <a className="hover:text-gray-400 cursor-pointer" href="#">Coments</a>
                </p>
                <nav className="flex space-x-6 pl-60 list-none mx-80 items-center ">
                    <li className="hover:text-gray-400 cursor-pointer">Github</li>
                    <li className="hover:text-gray-400 cursor-pointer">Intagram</li>
                    <li className="hover:text-gray-400 cursor-pointer">Linkdin</li>
                </nav>
            </div>
        </footer>
    )
}
export const Footer = () => {
    return (
        <footer className="justify-center mx-6 border-t-2 flex border-gray-500 p-10 w-auto">

            <div className="pl-18 md:flex md:space-x-20">
                <p>
                    <strong>© 2022 - 2024</strong>
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
            </div>
            <div>
                <nav className="list-none ml-20 items-center">
                    <li className="hover:text-gray-400 cursor-pointer">Github</li>
                    <li className="hover:text-gray-400 cursor-pointer">Intagram</li>
                    <li className="hover:text-gray-400 cursor-pointer">Linkdin</li>
                </nav>
            </div>
        </footer>
    )
}
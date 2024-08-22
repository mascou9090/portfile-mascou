import Project from "../project"

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
            <div className="flex flex-col justify-center">

                <h2 className="text-center text-3xl font-bold m-10">Projects</h2>
                <div className="m-10 flex flex-wrap justify-center gap-4">
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

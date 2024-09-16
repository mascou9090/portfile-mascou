import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About"
};

export default function Abount() {
    return (
        <div className="animate-content-second text-center">
            <div className="md:flex border-b-[1px] dark:border-gray-300 border-gray-800 mx-10">

                <div className="flex m-auto justify-center">
                    <img className="animate-content-main my-20 sm:w-90 sm:h-90 rounded-full" src="https://avatars.githubusercontent.com/u/104319336?v=4" alt="Perfil pictore" />
                </div>
                <div className="pl-10 sm:w-[60%] dark:text-gray-300 text-black ">
                    <div className="mb-36">
                        <h2 className="mb-5 animate-content-third m-auto w-44 text-3xl font-bold dark:hover:text-pink-500 dark:text-sky-500 hover:text-sky-400 text-pink-500 duration-300 cursor-pointer">Hello there!</h2>
                        <p className="animate-content-second">I'm Marcondes FP, develop Front-end pixel perfect and accessible digital.</p> <br />
                        <p>My name is Marcondes, I'm 30 years old and I've been a web developer for 5 years. Throughout my career, I have helped many professionals leverage their businesses, transforming them into digital platforms with intuitive design and pixel-perfect design. I'm always looking for ways to win over and engage users.</p> <br />
                        <p>At the beginning of my journey, I used Python and C# to solve problems and streamline processes as an intern at the Electoral Court in my city. Afterwards, I joined a team of freelance developers to hone my skills and monetize my knowledge gained so far.</p> <br />
                        <p>I've worked with React and TypeScript, ventured into ASP.NET and WordPress, and built layouts with Styled-components. Currently, I'm involved with the amazing Tailwind and Next. I always adopt the best practices and tools in the market to deliver high-quality products.</p>
                        <p>Today I find myself working as a CLT in a Logistics company.</p> <br />
                        <p>However, I provide freelance services in my spare time.</p> <br />
                        <p>I'm updating myself and migrating all the projects I have to Next and Tailwind, to improve myself even more with these powerful tools.</p> <br />
                        <p>I am providing a component so that my most relevant projects can be displayed to monitor my evolution process as a web dev professional</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center flex-wrap mt-20 mx-10">
                <div className="mb-36 mx-10 my-auto dark:text-gray-300 text-black">
                    <h2 className="mb-10 mx-auto animate-content-third w-72 text-3xl font-bold dark:hover:text-pink-500 dark:text-sky-500 hover:text-sky-400 text-pink-500 duration-300 cursor-pointer">Do you have dreams?</h2>
                    <p>My dream is to one day become a dev.</p> <br />
                    <p>Not just any dev, the one who solves the problem, the one who is cited by some and admired by others.</p>
                    <p>Mom's pride.</p> <br />
                    <p>I fight for this to happen every day.</p><br />
                    <p>Today I'm looking for my place.</p>
                    <p>Trying to make the real meeting happen.</p> <br />
                    <p>I'm from Fortaleza, a vibrant coastal city in northern Brazil.</p>
                    <p>With passion, I follow all the Front-End events that take place here, always looking for new inspiration and knowledge.</p> <br />
                    <p>I am deeply enthusiastic about this area and, with determination, I aim to become a highly recognized and desired Developer in the market.</p>
                </div>
                <div className="">
                    <h2 className="mb-10 mx-auto animate-content-main text-3xl font-bold dark:hover:text-pink-500 dark:text-sky-500 hover:text-sky-400 text-pink-500 duration-300 cursor-pointer">Projects</h2>
                    <div className="">
                        <h2 className="border-b-2 dark:border-white border-gray-700 sm:w-96 dark:text-gray-300 text-black mb-4">It's building</h2>
                        <h2 className="border-b-2 dark:border-white border-gray-700 sm:w-96 dark:text-gray-300 text-black mb-4">It's building</h2>
                        <h2 className="border-b-2 dark:border-white border-gray-700 sm:w-96 dark:text-gray-300 text-black mb-4">It's building</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
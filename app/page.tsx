import Link from "next/link";
import Experience from "./experience";
import { freelancerDescription, internDescription, storekeeperDescription } from "./descripetions";
import Tecs from "./tecs";

console.log("a")
export default function Home() {
  return (
    <main className="animate-content-main ">
      <aside className="pl-10 mb-10 lg:ml-28 animate-content-second">
        <h2 className="text-md animate-content-second dark:text-blue-700 dark:hover:text-pink-300 text-pink-500 hover:text-sky-600 duration-300 cursor-pointer font-bold">HELLO, MY NAME IS MARCONDES.</h2>
        <p className="text-sm w-[60%] sm:text-md sm:w-[50%]">
          <strong className="text-2xl sm:text-3xl ">
            I make websites.
          </strong> <br />
          I'm front-end develop in Brasil. <br />
          I work freelancer. <br />
          I build pixel-perfect, engaging, and accessible digital experiences. <br />
          I help you make your company digital. <br />
          And I work full-time at a logistics company. <br />
        </p>
      </aside>
      <aside className="flex flex-col sm:flex-row md:justify-center p-6">
        <div className="px-2 md:w-96">
          <h2 className="font-semibold text-3xl">Professional Experience</h2>
          <p className=" py-6 text-sm">Here are some of my professional experiences over the years, which have provided me with solid knowledge and a wide range of skills <strong className="font-medium text-sky-300">(technical and non-technical)</strong> necessary to face daily challenges in the workplace.</p>
          <h3 className="sm:mt-28 py-4 text-3xl">Skils Tec</h3>
          <div className="flex flex-wrap mb-8 space-x-2 max-w-96">
            <Tecs text="text-white" bg="bg-sky-700" name="Next.js 14"/>
            <Tecs text="text-white" bg="bg-sky-600" name="React.js"/>
            <Tecs text="text-white" bg="bg-blue-300" name="C#"/>
            <Tecs text2="text-blue-500" text="text-white" bg="bg-gray-900" name="Linux"/>
            <Tecs text="text-white" bg="bg-red-400" name="HTML5"/>
            <Tecs text="text-white" bg="bg-yellow-500" name="JavaScript"/>
            <Tecs text="text-white" bg="bg-blue-600" name="Typescript"/>
            <Tecs text="text-white" bg="bg-sky-700" name="Tailwind CSS"/>
            <Tecs text="text-white" bg="bg-pink-400" name="Styled-compenent"/>
            <Tecs text="text-white" bg="bg-blue-500" name="Entity Framework"/>
            <Tecs text="text-white" bg="bg-blue-300" name="ASP.NET 6"/>
            <Tecs text="text-white" bg="bg-sky-400" name="Windows"/>
            <Tecs text="text-white" bg="bg-green-600" name="Excel"/>
            <Tecs text="text-white" bg="bg-blue-500" name="Word"/>
            <Tecs text="text-white" bg="bg-red-600" name="Canvas"/>
            <Tecs text="text-white" bg="bg-blue-700" name="WordPress"/>
            <Tecs text="text-white" bg="bg-red-800" name="Figma"/>
            <Tecs text="text-white" bg="bg-sky-800" name="VSCode"/>
            <Tecs text2="text-blue-500" text="text-white" bg="bg-gray-950" name="Git"/>
            <Tecs text="text-white" bg="bg-orange-600" name="Postman"/>
          </div>
        </div>
        <div className="mb-20">
          <Experience name="Intern / Estagiario" skils={[{'name':"Python",'cor':"bg-red-500"}, {'name':"C#",'cor':"bg-blue-300"}]} dataAdimision={new Date(2019,2)} dataResignation={new Date(2020,7)} description={internDescription} compane="Tribunal Eleitoral do Ceará"/>
          <Experience name="Freelancer / Autonomo" skils={[{'name':"React",'cor':"bg-blue-400"}, {'name':"Typescripe",'cor':"bg-blue-600"}]} dataAdimision={new Date(2022,7)} dataResignation={new Date(2023,6)} description={freelancerDescription} compane="Jsnow Solutions"/>
          <Experience name="Storekeeper / Almocharife" skils={[{'name':"Windows",'cor':"bg-sky-400"}, {'name':"Slim",'cor':"bg-sky-500"}, {'name':"Agil",'cor':"bg-yellow-600"},{'name':"Excel",'cor':"bg-green-600"}, {'name':"Word",'cor':"bg-blue-500"}]} dataAdimision={new Date(2023,9)} dataResignation={new Date(0,0)} description={storekeeperDescription} compane="LokFrio Armazenagem"/>
        </div>
      </aside>
      <Link href="/contact">
          <p className="dark:hover:text-pink-300 dark:text-blue-600 text-black hover:text-blue-400 ml-10 duration-300 w-20 cursor-pointer">Interested?</p>
      </Link>
    </main>
  );
}
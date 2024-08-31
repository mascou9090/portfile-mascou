import Experience from "./experience";




export default function Home() {
  return (
    <main className="animate-content-main">
      <aside className="pl-10 mb-10">
        <h2 className="text-md animate-content-second dark:text-blue-700 dark:hover:text-pink-300 text-pink-500 hover:text-sky-600 duration-300 cursor-pointer font-bold">HOLLA, MY NAME IS MARCONDES.</h2>
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
      <aside className="flex flex-col pl-6">
        <div className="">
          <h2 className="font-semibold text-3xl">Professional Experience</h2>
          <p className="w-96 py-6 text-sm">Here are some of my professional experiences over the years, which have provided me with solid knowledge and a wide range of skills <strong className="font-medium text-sky-300">(technical and non-technical)</strong> necessary to face daily challenges in the workplace.</p>
        </div>
        <div className="">
          <Experience name="Estagiario" dataAdimision={new Date(2019,2)} dataResignation={new Date(2020,7)} description="Teste" compane="Tribunal eleitoral do Ceará"/>
          <Experience name="Almocharife" dataAdimision={new Date(2023,9)} dataResignation={new Date(0,0)} description="Teste" compane="LokFrio Armazenagem"/>
        </div>
      </aside>
    </main>
  );
}
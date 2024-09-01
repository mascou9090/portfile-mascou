'use cliente'
interface PropsSkils {
    name: string,
    cor: string,
}

interface PropsExperience {
    name: string,
    dataAdimision: Date,
    dataResignation: Date,
    description: string,
    compane: string,
    skils?: PropsSkils[];
}


export default function Experience({ name, dataAdimision, dataResignation, skils, description, compane }: PropsExperience) {

    const monthAdmission = dataAdimision.getMonth();
    const yearAdmission = dataAdimision.getFullYear();

    const dataActual = `0${monthAdmission}-${yearAdmission}`;

    const monthResignation = dataResignation.getMonth();
    const yearResignation = dataResignation.getFullYear();

    const monthExit = monthResignation !== 0 ? monthResignation : 0;

    const dataExit = `0${monthExit}-${yearResignation}`;


    return (
        <div className="flex flex-col pb-12 border-l-[1px] pl-4">
            <div>
                <h3 className="text-3xl">{compane}</h3>
            </div>

            <div className="flex flex-col space-x-5">
                <p className="ml-4 text-sm font-thin"> - {name} - </p>
                <div className="flex space-x-1">
                    <p className="text-xs">{dataActual} /</p>
                    <p className="text-xs">{monthExit === 0 ? ("Atual") : (dataExit)}</p>
                </div>
                <p className="block my-2">{description}</p>
                    <h3 className="text-2xl">Skills</h3>
                <div className="flex py-2 space-x-3">
                    {skils?.map(skil => (
                        <div key={skil.name} className={`${skil.cor} text-black font-mono animate-content-second rounded-md p-1`}>
                            <p>{skil.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


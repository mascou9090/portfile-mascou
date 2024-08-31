import Skils from "../skills";

interface PropsExperience {
    name: string,
    dataAdimision: Date,
    dataResignation: Date,
    description: string,
    compane: string,
    skils?: [{name:string, cor:string}]
}

export default function Experience({ name, dataAdimision, dataResignation, skils, description, compane }: PropsExperience) {

    const monthAdmission = dataAdimision.getMonth();
    const yearAdmission = dataAdimision.getFullYear();

    const dataActual = `${monthAdmission}/${yearAdmission}`;

    const monthResignation = dataResignation.getMonth();
    const yearResignation = dataResignation.getFullYear();

    const dataExit = `${monthResignation}/${yearResignation}`;


    return (
        <div className="flex flex-col m-4">
            <div>
                <h3 className="text-xl">{compane}</h3>
            </div>

            <div className="flex flex-col space-x-5">
                <p className="ml-4 text-xs font-thin"> -{name}- </p>
                <div className="flex space-x-4">
                    <p className="text-xs">{dataActual}</p>
                    <p className="text-xs">{dataExit}</p>
                </div>
                <p className="block">{description}</p>
                <div className="flex space-x-3">
                    <div className={`${skils?.[0].cor} rounded-md`}>
                        {skils?.[0].name}
                    </div>
                </div>
            </div>
        </div>
    )
}
interface PropsSkils {
    name: string,
    cor: string,
}

export default function Skils({name, cor}: PropsSkils) {
    return (
        <div className={`${cor} rounded-md text-sm animate-content-third p-1`}>
            {name}
        </div>
    )
}
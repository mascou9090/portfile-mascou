

interface PropsTecs {
    name: string
    bg: string
    text: string
    text2?: string
}

export default function Tecs({name, bg, text, text2}: PropsTecs) {
    return (
        <div className={`${bg} dark:${text} cursor-pointer hover:opacity-60 duration-500 font-mono ${text2} m-1 animate-content-third p-1 rounded-md`}>
            {name}
        </div>
    )
}
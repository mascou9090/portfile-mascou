export const Header = () => {
    return (
        <header className="flex h-10 w-auto">
            <div className="flex w-full ml-20 mt-8">
                <img className="w-20 h-20 rounded-full cursor-pointer" src="https://avatars.githubusercontent.com/u/104319336?v=4" alt="perfil photo" />
                <strong className="m-7 text-2xl hover:text-gray-400 cursor-pointer">Marcondes FP</strong>
            </div>
        </header>
    )
}
import Pincel from "../../assets/pincel.png"
export const Header = () => {
    return (
        <header className="flex w-auto">
            <div className="flex w-full ml-6 sm:ml-20 mt-8">
                <img className="w-14 h-14 rounded-full cursor-pointer" src="https://avatars.githubusercontent.com/u/104319336?v=4" alt="perfil photo" />
                <strong className="m-4 text-xl hover:text-pink-300 duration-300 text-black cursor-pointer">Marcondes FP</strong>
            </div>
            <div>
                <img className="cursor-not-allowed hover:opacity-30 duration-300 w-10 h-10 sm:mr-40 xl:mr-80 my-8 mr-10" src={Pincel.src} alt="brush Image icon" />
            </div>
        </header>
    )
}
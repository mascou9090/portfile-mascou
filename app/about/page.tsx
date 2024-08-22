import { Footer } from "../footer";
import { Header } from "../header";

export default function Abount() {
    return (
        <div className="bg-gray-300 dark:text-blue-700 dark:hover:text-pink-300">
            <Header />
            <div className="sm:flex">

                <div className="flex justify-center">
                    <img className="ml-10 my-20 sm:w-80 sm:h-80 rounded-full" src="https://avatars.githubusercontent.com/u/104319336?v=4" alt="Perfil photo" />
                </div>
                <div className="p-10 sm:w-[60%]">
                    <h2 className="mb-5 m-auto w-44 text-3xl font-bold dark:hover:text-pink-500 dark:text-sky-500 hover:text-sky-400 text-pink-500 duration-300 cursor-pointer">Hello there!</h2>
                    <p>I'm Marcondes FP, develop Front-end pixel perfect and accessible digital.</p>
                    <p className="mb-10 text-md">Work with the tecnologis: <a className="text-lg hover:text-yellow-500 duration-300 cursor-pointer" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Javascript</a>, <a className="text-lg hover:text-sky-700 duration-300 cursor-pointer" href="https://www.typescriptlang.org/">Typescripet</a>, <a className="text-lg hover:text-sky-500 duration-300 cursor-pointer" href="https://tailwindcss.com/">Tailwind</a>, <a className="text-lg hover:text-pink-500 duration-300 cursor-pointer" href="https://styled-components.com/">Style-components</a>, <a className="text-lg hover:text-sky-500 duration-300 cursor-pointer" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">Bootstrap</a>, <a className="text-lg hover:text-gray-500 duration-300 cursor-pointer" href="https://br.wordpress.org/">Wordpress</a>, <a className="text-lg hover:text-sky-400 duration-300 cursor-pointer" href="https://nextjs.org/">Next.js</a>, <a className="text-lg hover:text-sky-400 duration-300 cursor-pointer" href="https://pt-br.legacy.reactjs.org/">React.js</a>.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sit deserunt cupiditate quia provident? Harum laudantium ipsum facilis fugiat natus neque consequatur dolor perferendis error ab, quod est odio repellendus rerum asperiores! Consectetur, rem. Repellendus incidunt magni et veniam consequuntur, voluptate minus nihil natus voluptas delectus, molestiae vitae, aperiam voluptatum possimus maxime odio beatae ratione nesciunt dicta. Quis pariatur porro perspiciatis molestias. Perferendis quae fugit nesciunt illo iusto aperiam architecto possimus aliquam, magnam repudiandae animi harum quam tempore, consequuntur voluptate recusandae laborum neque, sed consequatur eum! Assumenda dolorem tempore odio sed? Praesentium alias cupiditate illo perferendis vero expedita beatae ipsa? Alias, atque. Quidem pariatur distinctio quas enim dicta ipsa dolorem provident beatae mollitia! Voluptatibus expedita ea deleniti atque reprehenderit et veritatis est sit dolorum ipsa, mollitia at? Debitis nobis suscipit accusantium! Deserunt molestiae dolorem autem veritatis cum, aliquid vitae. Veritatis dicta eveniet quidem repellat magni minima rem dolor illum voluptas assumenda earum, odit asperiores ducimus recusandae consectetur laboriosam praesentium architecto itaque. Quae ad fugiat illum veritatis aliquid, odio error accusamus recusandae iste repudiandae dolorem asperiores placeat autem neque assumenda deleniti quibusdam dicta voluptates doloribus fuga dolores beatae officia doloremque? Illum officiis commodi fuga officia assumenda hic temporibus necessitatibus eum tempora. Tenetur vero molestias, neque similique mollitia saepe nihil error quasi, cupiditate voluptatem expedita! Minima quidem consequatur eligendi vel, consequuntur doloremque modi at facilis porro, iste ex. Quibusdam, alias et illum cumque autem adipisci libero eos ipsum doloremque suscipit eveniet excepturi sit, rerum incidunt obcaecati quasi iure beatae! Quidem alias ad consectetur sapiente, perferendis error necessitatibus ipsam libero debitis optio explicabo facere earum voluptatibus quis sed commodi corrupti blanditiis asperiores hic. Voluptates fuga eveniet deserunt tempore molestias voluptas! Suscipit enim expedita provident laudantium aliquid asperiores iure tenetur maxime accusamus architecto error reiciendis, accusantium iste laborum neque ipsum molestias molestiae magnam possimus.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
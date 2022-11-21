import { FC } from "react";
const Footer: FC = () => {

    return(<div className="bg-dark text-white py-7 px-9 flex">
        <div className="flex-1">
            <h1 className="text-4xl text-blue-500 font-semibold">Chyrr</h1>
            <p className="text-gray-700 mt-4 text-sm">Creating memorable experiences for those who love sport.</p>
        </div>
        <div className="flex-1 text-right">
            <h1 className="text-lg text-white font-semibold">Menu</h1>
            <ul className="text-sm text-gray-500">
                <li><a>Home</a></li>
                <li><a>Featured</a></li>
                <li><a>About us</a></li>
                <li><a>Be a partner</a></li>
            </ul>
        </div>
    </div>)
    
}

export default Footer;
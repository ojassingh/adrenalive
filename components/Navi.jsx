import { FC } from "react";

const Navi = () => {

    const navItems = [
        "Home",
        "About",
        "Games",
        "Contact",
        "Account"
    ];

    return(<div>
        <div className="flex place-content-around">
            <h1>What's good</h1>
            <ul className="text-black flex gap-6">
                {navItems.map((item, i)=>{
                    return(<li key={i}>{item}</li>)
                })}
            </ul>
        </div>
    </div>)
}

export default Navi;
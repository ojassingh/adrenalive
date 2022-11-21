import { FC } from "react";
import PopoverNavi from "./PopoverNavi";
import { motion } from "framer-motion";

const Navi = () => {

    const navItems = [
        "Home",
        "About",
        "Games",
        "Contact",
        "Account"
    ];

    return(<div>
        <div className="sm:hidden lg:block md:hidden xs:hidden">
            <div className="flex place-content-around">
                <h1>What's good</h1>
                <ul className="text-black flex gap-6">
                    {navItems.map((item, i)=>{
                        return(<li key={i}>{item}</li>)
                    })}
                </ul>
            </div>
        </div>
        <div className="xs:block sm:block md:block lg:hidden pt-4 pb-2 px-7">
            <div className="flex">
                <div className="flex-2">
                    <div className="flex gap-2">
                        <h1 className="text-5xl font-bold text-blue-600">Chyrr</h1>
                        <motion.div animate={{opacity: 0}} transition={{ease:"easeInOut" ,duration: 1, repeat:Infinity, repeatType:"mirror"}} className="pt-2 relative group my-auto">
                            <div className=" animate-tilt transition group-hover:duration-200 duration-500 group-hover:opacity-100 opacity-75 absolute rounded-lg -inset-0.5 bg-red-500 filter blur h-1 my-auto"></div>
                            <div className="bg-red-500 rounded-xl w-4 h-4 rounded-full my-auto"/>
                            {/* </button> */}
                        </motion.div>
                    </div>
                </div>
                <div className="flex-1 my-auto"><PopoverNavi/></div>
            </div>
        </div>
    </div>)
}

export default Navi;


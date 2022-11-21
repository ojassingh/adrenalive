import { FC } from "react";
import { motion } from "framer-motion";


const Boot: FC = () => {
    return(<motion.div className="h-screen w-full bg-white grid place-content-center">
        <h1 className="text-5xl font-bold text-blue-600">Chyrr</h1>
        <p className="text-lg font-medium text-gray-500">Revolutionising sport watching</p>
    </motion.div>)
}

export default Boot;
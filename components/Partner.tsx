import { FC } from "react";
import pic4 from '../public/pic4.jpeg'
import { motion } from "framer-motion";

const Partner: FC = () => {

    const variants = {
        rest: {
            x: 0,
            transition: {
              duration: 4,
              type: "tween",
              ease: "easeIn"
            }
          },
        hover: {
            scale: 0.97,
            transition: { type: "spring", duration: 0.8, ease: "linear" }
        }
    }

    return(<div className="bg-white text-white py-4 px-9">
        <h1 className="text-3xl text-black font-semibold mt-4">Partner up with us!</h1>
        <p className="text-gray-700 text-sm">By people who love sports, for people who love sports. Whether you own a sports bar, restaurant, or any facility that wants to be part of us, learn more about our partnership program.</p>
        <motion.div whileHover="hover" initial="rest" className="mt-4 bg-dark w-full h-60 rounded-3xl text-white flex place-content-center">
        <div className="w-full relative overflow-hidden rounded-3xl shadow-lg cursor-pointer">
        <img className="opacity-25 object-cover w-full h-full" src={pic4.src} alt="sports logos"/>

        <div className="grid place-content-center absolute top-0 left-0 px-6 py-4 mt-6">
        <h4 className="text-center mb-3 text-2xl font-bold tracking-tight text-white">Join Chyrr's partnership program today.</h4>
        <a href="#" className="grid place-content-center"><button className="bg-blue-600 text-white rounded-xl px-20 py-2 mt-3 font-medium">Learn more</button></a>
        </div>
        </div>
        </motion.div>

    </div>)
}

export default Partner;
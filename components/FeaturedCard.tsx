import { motion } from "framer-motion";
import { FC } from "react";

const Card: FC<any>= (props: any) => {

    let game = props.game;

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

    return(<motion.a variants={variants} whileHover="hover" initial="rest" key={game.id} className="bg-dark w-full h-60 rounded-3xl text-white flex place-content-center">
    <div className="w-full relative overflow-hidden rounded-3xl shadow-lg cursor-pointer">
	<img className="opacity-25 object-cover w-full h-full" src={game.imgUrl.src} alt="sports logos"/>

	<div className="absolute top-0 left-0 px-6 py-4">
	  <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">{game.title}</h4>
	  <p className="leading-normal text-white font-bold">{(game.sport)}</p>
      <p className="leading-normal text-white font-medium">{(game.location)}</p>
      <p className="leading-normal text-white font-medium">{(game.date)}</p>
      <button className="bg-blue-600 text-white rounded-xl px-3 py-2 mt-3 font-medium">Sign up!</button>
	</div>
  </div>

</motion.a>)
}

export default Card;
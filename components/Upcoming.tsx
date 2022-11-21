import { StaticImageData } from "next/image";
import { FC } from "react";
import pic1 from '../public/pic1.jpeg'
import pic2 from '../public/pic2.jpeg'
import pic3 from '../public/pic3.jpeg'
import Card from "./FeaturedCard";

const Upcoming: FC = () => {


    type games =
    {
        id: string | number,
        imgUrl: any,
        title: string,
        date: string,
        sport: string,
        location: string
    }[]

    const featured: games = [
        {
            id: 1,
            imgUrl: pic1,
            title: "Argentina vs Saudi Aribia | Qatar World Cup 2022",
            date:  "Tue, Nov 2022, 5:00 a.m",
            sport: "Football",
            location: "Location X, Downtown Toronto"
        },
        {
            id: 2,
            imgUrl: pic2,
            title: "France vs Australia | Qatar World Cup 2022",
            date:  "Tue, Nov 2022, 2:00 p.m",
            sport: "Football",
            location: "Location Y, Downtown Toronto"
        },
        {
            id: 3,
            imgUrl: pic3,
            title: "Germany vs Japan | Qatar World Cup 2022",
            date:  "Wed, Nov 23, 8:00 a.m",
            sport: "Football",
            location: "Location Z, Downtown Toronto"
        }
    ]

    return(<div className="bg-dark text-white py-8 px-2">
        <div id="content" className="px-10">
            <h1 className="text-2xl font-semibold">Featured games</h1>
            <p className="pt-2 text-gray-200 text-sm">Check out our upcoming games, and register to watch it together!</p>

            <div id="featured-games" className="flex flex-wrap gap-4 pt-4">
                {featured.map((game)=>{
                    return(
                        <div key={game.id}><Card game={game} /></div>
                    )
                })}
            </div>

        </div>


    </div>)
}

export default Upcoming;
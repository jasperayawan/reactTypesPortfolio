import { Link } from "react-router-dom"
import MyDataProject from "../data/card_data"
import CardProject from "./Card_Project"

export default function ProjectIBuilt(){
    return(
        <div className="mx-auto max-w-6xl flex justify-center items-center flex-col py-24 px-4">
             <h1 className="text-slate-800 font-bold text-4xl">What I built?</h1>

             <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-3 gap-5">
                {MyDataProject.map((prevItem) => (
                    <div key={prevItem.id}>
                        <Link to={prevItem.url}>
                            <CardProject
                                image={prevItem.img}
                                title={prevItem.title}
                                desc={prevItem.description}
                            />
                        </Link>
                    </div>
                ))}
             </div>
        </div>
    )
}
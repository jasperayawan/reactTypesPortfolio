import { MdVerified } from 'react-icons/md' 
import Resume from '../assets/Resume.pdf'

export default function Home(){
    return(
        <div className="min-h-[90vh] flex justify-center">
            <div className="w-full mx-auto md:max-w-6xl flex flex-col md:flex-row relative px-4">
                <div className="absolute top-0 right-10 blur-[125px] circle -z-10 w-[300px] h-[300px] bg-indigo-500 rounded-full"></div>
                <div className="flex flex-col justify-center gap-3">
                    <div className="flex gap-2">
                        <span className="text-2xl">Hi, I'm Jasper</span>
                        <MdVerified className="text-indigo-500"/>
                    </div>
                    <h1 className="text-6xl font-bebas">Full Stack Developer</h1>
                    <p className="md:max-w-xl mb-4 font-sm font-semibold text-zinc-600">
                        Currently 4th year college IT student and working as a 
                        <span className="font-bold text-indigo-500"> Web Developer </span>
                        base in the Philippines. Through this portfolio, I invite you to delve 
                        into my journey, projects, and expertise in the world of UI development.
                    </p>
                    <div>
                        <a href={Resume} download="Resume" className='bg-slate-800 text-zinc-300 px-4 py-2.5 rounded-md font-semibold'>
                            download resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
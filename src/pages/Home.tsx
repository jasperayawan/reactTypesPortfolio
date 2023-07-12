import { MdVerified } from 'react-icons/md' 
import Resume from '../assets/Resume.pdf'
import JasperImg from '../assets/jass.jpg'

export default function Home(){
    return(
        <div className="flex justify-center items-center min-h-[90vh] py-24 md:py-0">
            <div className="w-full mx-auto md:max-w-6xl grid md:grid-cols-2 relative px-4 md:gap-24 place-items-center place-content-between">
                <div className="absolute top-0 right-10 blur-[165px] circle -z-10 w-[300px] h-[300px] bg-indigo-500 rounded-full"></div>
                <div className="col-span-1 flex-1 flex flex-col">
                    <div className="flex gap-2">
                        <span className="text-2xl text-slate-600 font-extrabold">Hi, I'm Jasper</span>
                        <MdVerified className="text-indigo-500"/>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bebas text-slate-800">Full Stack Developer</h1>
                    <p className="md:max-w-xl mb-4 font-sm font-semibold text-slate-600 tracking-wider">
                        Currently 4th year college IT student and working as a 
                        <span className="font-bold text-indigo-500"> Web Developer </span>
                        base in the Philippines. Through this portfolio, I invite you to delve 
                        into my journey, projects, and expertise in the world of UI development.
                    </p>
                    <div className='w-full md:w-1/3'>
                        <a href={Resume} download="Resume" className='w-full flex justify-center items-center md:w-auto bg-slate-800 text-zinc-300 px-4 py-2.5 rounded-md font-semibold'>
                            download resume
                        </a>
                    </div>
                </div>
                <div className=' pt-10 flex justify-center items-center'>
                    <img src={JasperImg} alt='Jasper' className='w-[300px] h-[300px] rounded-full object-center object-cover'/>
                </div>
            </div>
        </div>
    )
}
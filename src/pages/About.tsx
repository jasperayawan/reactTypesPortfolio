import meCoding from '../assets/me.jpg'

export default function About(){
    return(
        <div className='min-h-screen flex justify-center items-center pb-10'>
            <div className="mx-auto max-w-2xl flex flex-col justify-center items-center gap-3 px-4">
                <img src={meCoding} alt="me" />
                <div>
                    <h1 className="text-slate-800 font-bold text-4xl">Who am I?</h1>

                    <p className='text-slate-600 font-semibold'>Well! I'm Jasper a Full stack Web Developer  I learned how to code when
                        I was 18 and now I'm currently 21 years old when I was in 1st year 
                        college we learned with c++ then I learned Web development when I 
                        was in second year college then start to learn with with HTML and 
                        CSS then next I learned Javascript through Freecodecamp then I got a
                        cetificate</p>
                </div>
            </div>
        </div>
    )
}
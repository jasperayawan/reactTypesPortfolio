import { Link } from 'react-router-dom'


export default function Header(){
    return(
        <header className="sticky top-0 z-20 flex h-20 w-full items-center justify-center px-5 xs:px-[50px] xl:px-0 ">
            <nav className="flex w-full items-center justify-between xl:max-w-6xl 2xl:w-[1136px]">
                <div className="logo text-2xl font-bebas text-zinc-300"><span className='font-bold'>ジ</span>Jasper.io</div>

                <ul className='hidden md:flex flex-row justify-center items-center gap-x-8 font-bebas'>
                    <li>
                        <Link to='/about' className='uppercase text-zinc-300 hover:text-zinc-600 tracking-wider text-sm'>About</Link>
                    </li>
                    <li>
                        <Link to='/project' className='uppercase text-zinc-300 hover:text-zinc-600 tracking-wider text-sm'>Project</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='uppercase text-zinc-300 hover:text-zinc-600 tracking-wider text-sm'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
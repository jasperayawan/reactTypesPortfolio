import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <header className="sticky top-0 z-20 flex h-20 w-full items-center justify-center px-5 xs:px-[50px] xl:px-0">
            <nav className="flex w-full items-center justify-between xl:max-w-6xl 2xl:w-[1136px]">
                <div className="logo text-2xl font-bebas"><span className='font-bold'>ジ</span>Jasper.io</div>

                <ul className='flex flex-row justify-center items-center gap-x-8 font-bebas'>
                    <li>
                        <Link to='/about' className='uppercase hover:text-zinc-600 font-semibold tracking-wider text-xl'>About</Link>
                    </li>
                    <li>
                        <Link to='/project' className='uppercase hover:text-zinc-600 font-semibold tracking-wider text-xl'>Project</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='uppercase hover:text-zinc-600 font-semibold tracking-wider text-xl'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
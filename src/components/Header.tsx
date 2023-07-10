import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <header className="sticky top-0 z-20 flex h-20 w-full items-center justify-center px-5 xs:px-[50px] xl:px-0">
            <nav className="flex w-full items-center justify-between xl:w-[980px] 1.5xl:w-[1066px] 2xl:w-[1136px] 3xl:w-[1620px]">
                <div className="logo">Jasper.io</div>

                <ul className='flex flex-row justify-center items-center gap-x-8'>
                    <li>
                        <Link to='/about' className='uppercase'>About</Link>
                    </li>
                    <li>
                        <Link to='/project' className='uppercase'>Project</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='uppercase'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
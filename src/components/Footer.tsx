

export default function Footer(){
    
    const currentYear = new Date().getFullYear();
    return(
        <footer>
            <div className="w-full max-w-6xl mx-auto flex justify-between items-center text-gray-500 py-5 px-4">
                <span>©{currentYear} Jasper.Dev All right reserved</span>
                <span>facebook</span>
            </div>
        </footer>
    )
}
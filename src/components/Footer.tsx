

export default function Footer(){
    
    const currentYear = new Date().getFullYear();
    return(
        <footer className="bg-gray-900">
            <div className="w-full max-w-6xl mx-auto flex justify-between items-center text-gray-500 py-1 text-sm px-4">
                <span>©{currentYear} Jasper.Dev All right reserved</span>
                <span className="bg-blue-500 text-zinc-900 px-2">facebook</span>
            </div>
        </footer>
    )
}
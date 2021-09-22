import request from "../utils/request";
import { useRouter } from "next/router";

function Navbar() {
    const Router = useRouter();
    return (
        <nav className="relative">
            <div className="flex px-10 sm:px-20 text-2xl space-x-10 sm:space-x-18 overflow-x-scroll scrollbar-hide">
            {Object.entries(request).map(([key,{title,url}])=>(
                <h2
                onClick={()=>Router.push(`/?genre=${key}`)}
                key={key}
                className="cursor-pointer hover:scale-100 hover:text-white hover:animate-bounce active:text-red-100" 
               >{title}</h2>
            ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>
        </nav>
    )
}


export default Navbar;

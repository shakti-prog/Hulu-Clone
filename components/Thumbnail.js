import { ThumbUpIcon } from '@heroicons/react/outline';
import Image from 'next/image'

function Thumbnail({result}){
    const BASE_URL = "https://image.tmdb.org/t/p/original"
    return (
        <div className="group cursor-pointer px-2">
            <Image
            src={`${BASE_URL}${result.poster_path}`}
            layout="responsive"
            height={1080}
            width={1920}
            />
            <div className="p-2 group-hover:font-bold">
            <p className="truncate max-w-md">{result.overview}</p>     
             <h2 className="mt-1 text-2xl ">{result.title || result.original_name}</h2>
          
    
    
           </div>    
        </div>
    )
}

export default Thumbnail;

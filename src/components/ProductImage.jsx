import { Heart } from "lucide-react"
import { useState } from "react";


function productImage({imageUrl, perfumeName}) {
    const [isWishlisted, setIsWishlisted] = useState(false);
    return (
        <div className="order-1 md:order-2 flex-1 relative h-[350px] sm:h-[450px] md:h-[500px] lg:h-[650px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-white border border-[#F2EDE4] shadow-xl md:shadow-2xl shadow-[#8B5E3C]/5 group">
            <img
                src={imageUrl}
                alt={perfumeName}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-4 right-4 md:top-8 md:right-8 p-2.5 md:p-3.5 bg-white/80 backdrop-blur-xl rounded-full text-[#3E2723] hover:bg-white transition-all shadow-lg active:scale-90 z-20"
            >
                <Heart size={18} className={isWishlisted ? "fill-red-500 stroke-red-500" : ""} />
            </button>

        </div>
    )
}

export default productImage
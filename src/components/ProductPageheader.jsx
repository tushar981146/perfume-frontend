import { Star } from 'lucide-react'
import React from 'react'

function ProductPageheader({brandName, perfumeName, price, rating, }) {
    return (
        <header className="space-y-4 md:space-y-6">
            <div className="space-y-1 md:space-y-2">
                <span className="text-[#8B5E3C] font-bold tracking-[0.3em] text-[9px] md:text-[10px] uppercase block">{brandName}</span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#2D1B17] leading-tight md:leading-[1.1]">{perfumeName}</h1>
                <div className="flex items-center gap-2 md:gap-3 pt-1 md:pt-2">
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#E0C9A6]" />
                </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
                <div className="flex gap-0.5 md:gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} md={14} fill={i < 4 ? "#D4AF37" : "none"} stroke={i < 4 ? "#D4AF37" : "#D1D5DB"} />
                    ))}
                </div>
                <span className="text-xs md:text-sm font-bold tracking-tighter">{rating}</span>
                <span className="text-gray-300 text-sm italic">|</span>
                <button className="text-gray-400 text-[10px] md:text-xs font-bold border-b border-gray-200 hover:text-[#8B5E3C] transition-colors">{rating} REVIEWS</button>
            </div>
        </header>
    )
}

export default ProductPageheader
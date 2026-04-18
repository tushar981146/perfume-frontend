import { Heart, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";

const ProductCard = ({ product }) => {
  // console.log('Product passed to ProductCard:', product);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

 
  
  return (
    <div className="group bg-white rounded-xl border border-stone-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-stone-200/50 flex flex-col h-full">
      {/* Image Container */}
      <div className={`relative aspect-[4/5] overflow-hidden ${product.color || 'bg-stone-50'}`}>
        <img 
          src={product.productImage} 
          alt={product.perfumeName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isBestSeller && (
            <span className="bg-amber-800/90 text-white text-[10px] font-bold px-3 py-1 rounded shadow-sm tracking-widest">
              Best Seller
            </span>
          )}
          {product.discount && (
            <span className="bg-rose-600/90 text-white text-[10px] font-bold px-3 py-1 rounded shadow-sm">
              {product.discount}
            </span>
          )}
        </div>

        <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full text-stone-400 hover:text-rose-500 transition-colors shadow-sm">
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-1 flex justify-between items-start">
          <h3 className="font-serif text-lg text-stone-800 leading-tight">{product.perfumeName}</h3>
        </div>
        <p className="text-xs text-stone-400 mb-3 tracking-wide">{product.brandName}</p>
        
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              className={i < Math.floor(product.stars) ? "fill-amber-400 text-amber-400" : "text-stone-200"} 
            />
          ))}
          <span className="text-[10px] font-medium text-stone-400 ml-1">{product.reviews}</span>
        </div>

        <div className="flex items-baseline space-x-2 mb-4">
          <span className="text-lg font-bold text-stone-800">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-xs text-stone-400 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        {/* Sizes */}
        <div className="flex flex-wrap gap-2 mb-6">
           {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-3 py-1 text-[10px] font-medium border rounded transition-all ${
                selectedSize === size 
                ? 'bg-stone-800 border-stone-800 text-white' 
                : 'border-stone-200 text-stone-500 hover:border-stone-400'
              }`}
            >
              {size}
            </button>
          ))} 
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex items-center space-x-2">
          <button className="flex-grow bg-stone-900 text-white py-3 rounded-lg text-xs font-bold tracking-[0.15em] transition-transform active:scale-95 hover:bg-black uppercase">
            Add to Cart
          </button>
          <button className="p-3 border border-stone-200 rounded-lg text-stone-400 hover:text-stone-800 hover:border-stone-400 transition-colors">
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard
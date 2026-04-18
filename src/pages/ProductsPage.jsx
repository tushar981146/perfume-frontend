
import Breadcrumb from '../components/Breadcrumb';
import useProductStore from '../store/product';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CheckCircle2, ChevronRight, Gift, Heart, Share2, ShoppingBag, Star } from 'lucide-react';
import Loader from '../components/Loader';

const FragranceIcon = ({ type }) => {
  switch(type) {
    case 'bergamot': return <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>;
    case 'rose': return <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 10c-2 0-4 1-4 3s2 3 4 3 4-1 4-3-2-3-4-3z"/><path d="M12 2c5 0 8 4 8 8s-3 8-8 8-8-4-8-8 3-8 8-8z"/><path d="M12 18v4"/></svg>;
    case 'vanilla': return <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M8 7l8 4m-8 6l8-4"/></svg>;
    default: return <Star />;
  }
};


const App = () => {
  const { id } = useParams()
  const [selectedSize, setSelectedSize] = useState('50 ml');
  const [activeImage, setActiveImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  

  const { fetchProductById, singleProduct } = useProductStore();

  

  useEffect(() => {
    fetchProductById(id);
  }, [id, fetchProductById]);

  useEffect(() => {
    if (singleProduct?.sizes?.length) {
      setSelectedSize(singleProduct.sizes[0]);
    }
  }, [singleProduct]);


  if (!singleProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F7F4] w-full lg:w-full">
      <Breadcrumb />

      {console.log('Rendering product details for:', singleProduct)}

      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Media & Details */}
          <div className="lg:col-span-7 space-y-20">
            
            {/* Gallery Section */}
            <div className="flex flex-col md:flex-row gap-5">
              
              <div className="flex-grow order-1 md:order-2 relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-50 border border-stone-100">
                <img src={singleProduct.productImage} className="w-full h-full object-cover animate-in fade-in duration-500" alt="main" />
                <button className="absolute top-5 right-5 p-2.5 bg-white/90 backdrop-blur rounded-full text-stone-400 hover:text-rose-500 shadow-sm transition-all">
                  <Heart size={18} />
                </button>
                
              </div>
            </div>

            {/* Description & Notes */}
            <div className="space-y-12">
              <section>
                <h3 className="text-2xl font-serif mb-6 text-stone-900">Description</h3>
                <p className="text-stone-500 leading-relaxed font-light text-[15px]">
                  {singleProduct.description}
                </p>
              </section>

              <section className="bg-[#f9f7f4] rounded-2xl p-8 md:p-12 border border-stone-100">
                <h4 className="text-[10px] font-bold tracking-[0.25em] text-stone-400 uppercase text-center mb-10">Fragrance Notes</h4>
                <div className="grid grid-cols-3 gap-4">
                  {(singleProduct.notes || []).map((note, i) => (
                    <div key={i} className="text-center space-y-4">
                      <div className="mx-auto w-12 h-12 rounded-full bg-white flex items-center justify-center text-amber-900 shadow-sm">
                        <FragranceIcon type={note.type} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-stone-800">{note.label}</p>
                        <p className="text-[11px] text-stone-400 font-light">{note.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-3 gap-6 pt-4">
                {(singleProduct.stats || []).map((stat, i) => (
                  <div key={i} className="text-center space-y-1">
                    <p className="text-[13px] font-bold text-stone-800">{stat.label}</p>
                    <p className="text-[11px] text-stone-400 font-light">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Buying Interface (Sticky) */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-10">
              
              {/* Product Header */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-2 leading-tight">{singleProduct.perfumeName}</h1>
                  <p className="text-sm text-stone-400 font-medium tracking-wide">
                    {singleProduct.brandName || singleProduct.brand} • {singleProduct.edition || 'Eau de Parfum'}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" className={i === 4 ? 'opacity-50' : ''} />)}
                  </div>
                  <span className="text-sm font-bold">{singleProduct.stars || singleProduct.rating}</span>
                  <span className="text-stone-300 text-xs">({singleProduct.reviews || singleProduct.reviewCount} reviews)</span>
                </div>

                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold text-stone-900">${singleProduct.price}</span>
                  <span className="text-stone-300 line-through text-lg font-light">${singleProduct.originalPrice || singleProduct.oldPrice}</span>
                  <span className="px-2.5 py-1 bg-amber-50 text-amber-800 text-[10px] font-bold rounded uppercase tracking-wider">{singleProduct.discount}</span>
                </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-4">
                <p className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase">Size</p>
                <div className="flex gap-3">
                  {(singleProduct.sizes || []).map(size => (
                    <button 
                      key={size} 
                      onClick={() => setSelectedSize(size)}
                      className={`flex-1 py-3 text-xs font-bold rounded-lg border transition-all ${selectedSize === size ? 'bg-stone-900 border-stone-900 text-white shadow-xl shadow-stone-200' : 'bg-white border-stone-200 text-stone-500 hover:border-stone-800'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-[12px] font-medium text-stone-600">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span>In Stock • Free shipping available</span>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button className="w-full py-4 bg-stone-900 text-white rounded-xl text-xs font-bold tracking-[0.2em] uppercase hover:bg-stone-800 transition-all flex items-center justify-center gap-3 shadow-lg shadow-stone-100">
                  <ShoppingBag size={18} /> Add to Cart
                </button>
                <button className="w-full py-4 border border-stone-200 text-stone-800 rounded-xl text-xs font-bold tracking-[0.2em] uppercase hover:border-stone-800 transition-all flex items-center justify-center gap-3">
                  <Heart size={18} /> Add to Wishlist
                </button>
              </div>

              <div className="p-6 bg-amber-50/30 rounded-2xl border border-amber-100/50 flex items-center gap-4 group cursor-pointer hover:bg-amber-50 transition-colors">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-amber-800 shadow-sm"><Gift size={20} /></div>
                <div className="flex-grow">
                  <h4 className="text-xs font-bold text-stone-800">Free luxury gift wrapping</h4>
                  <p className="text-[11px] text-stone-400">+ Premium samples included</p>
                </div>
                <ChevronRight size={16} className="text-stone-300 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Simplified Review Section */}
              <section className="pt-10 space-y-8 border-t border-stone-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-serif">Product Reviews</h3>
                  <button className="text-[10px] font-bold tracking-widest text-amber-800 flex items-center gap-1 uppercase">View All ({singleProduct.reviews}) <ChevronRight size={14} /></button>
                </div>

                {/* Single Featured Review */}
                <div className="p-6 bg-stone-50/50 rounded-2xl border border-stone-100 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                    </div>
                    <span className="text-[10px] text-stone-400">2 days ago</span>
                  </div>
                  <p className="text-[14px] text-stone-800 font-serif leading-relaxed italic">
                    "Absolutely stunning fragrance! Lasts all day and gets so many compliments. The rose notes are incredibly fresh and realistic."
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[12px] font-bold">Sarah M.</span>
                      <span className="text-[9px] font-bold text-green-600 flex items-center gap-1 uppercase tracking-tighter">
                        <CheckCircle2 size={10} /> Verified Purchase
                      </span>
                    </div>
                    <button className="text-stone-400 hover:text-stone-900 transition-colors">
                      <Share2 size={14} />
                    </button>
                  </div>
                </div>

                <button className="w-full py-4 border border-stone-200 rounded-xl text-[10px] font-bold tracking-[0.2em] text-stone-500 uppercase flex items-center justify-center gap-2 hover:border-stone-800 hover:text-stone-800 transition-all">
                  Write a Review
                </button>
              </section>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;
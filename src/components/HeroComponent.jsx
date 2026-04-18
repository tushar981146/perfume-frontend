import { Package, RotateCcw, ShieldCheck, Truck } from "lucide-react";

const Hero = () => (
  <header className="relative bg-[#f9f7f4] py-16 text-center overflow-hidden">
    {/* Soft bokeh effect background elements */}
    <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
       <div className="absolute top-10 left-[10%] w-32 h-32 bg-white rounded-full blur-3xl opacity-60"></div>
       <div className="absolute bottom-10 right-[15%] w-48 h-48 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
    </div>

    <div className="relative z-10 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">Shop All Perfumes</h1>
      <p className="text-stone-500 max-w-xl mx-auto mb-10">Discover our complete collection of premium fragrances crafted by master perfumers from around the world.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { icon: <ShieldCheck size={18} />, label: "100% Authentic" },
          { icon: <Truck size={18} />, label: "Free Shipping on $50+" },
          { icon: <Package size={18} />, label: "Premium Packaging" },
          { icon: <RotateCcw size={18} />, label: "30-Day Returns" }
        ].map((benefit, i) => (
          <div key={i} className="flex items-center justify-center space-x-2 text-xs font-medium text-stone-600">
            <span className="text-amber-800">{benefit.icon}</span>
            <span>{benefit.label}</span>
          </div>
        ))}
      </div>
    </div>
  </header>
);

export default Hero
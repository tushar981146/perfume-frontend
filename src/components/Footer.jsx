const Footer = () => (
  <footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
        <div className="md:col-span-1">
          <div className="flex flex-col items-center md:items-start mb-6">
            <span className="text-xl font-serif tracking-widest text-stone-800">PERFUME</span>
            <span className="text-[8px] tracking-[0.3em] text-stone-500 uppercase">Shop</span>
          </div>
          <p className="text-sm text-stone-500 leading-relaxed max-w-xs mx-auto md:mx-0">
            Providing high-quality, artisanal fragrances for those who appreciate the finer scents in life.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs font-bold tracking-widest text-stone-800 mb-6 uppercase">Collections</h4>
          <ul className="space-y-4 text-sm text-stone-500">
            <li><span  className="hover:text-stone-800">New Arrivals</span></li>
            <li><span  className="hover:text-stone-800">Best Sellers</span></li>
            <li><span  className="hover:text-stone-800">Limited Edition</span></li>
            <li><span  className="hover:text-stone-800">Gift Sets</span></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs font-bold tracking-widest text-stone-800 mb-6 uppercase">Support</h4>
          <ul className="space-y-4 text-sm text-stone-500">
            <li><span  className="hover:text-stone-800">Shipping Policy</span></li>
            <li><span  className="hover:text-stone-800">Returns & Exchanges</span></li>
            <li><span  className="hover:text-stone-800">Store Locator</span></li>
            <li><span  className="hover:text-stone-800">FAQ</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-widest text-stone-800 mb-6 uppercase">Newsletter</h4>
          <p className="text-xs text-stone-400 mb-4">Subscribe to receive updates and exclusive offers.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white border border-stone-200 px-4 py-2 text-sm w-full focus:outline-none focus:border-stone-400"
            />
            <button className="bg-stone-800 text-white px-4 py-2 text-xs font-bold uppercase hover:bg-black transition-colors">Join</button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-stone-400">© 2024 Perfume Shop. All rights reserved.</p>
        <div className="flex space-x-6 text-stone-400 text-xs">
          <span className="hover:text-stone-800 transition-colors">Privacy Policy</span>
          <span className="hover:text-stone-800 transition-colors">Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
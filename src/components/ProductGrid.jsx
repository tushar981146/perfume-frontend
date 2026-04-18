import { LayoutGrid, List } from "lucide-react";
import ProductCard from "./ProductCard";
import useProductStore from "../store/product";
import { useEffect, useState } from "react";

const ProductGrid = () => {

  const { products, fetchProducts } = useProductStore();


  useEffect(() => {
   
     fetchProducts();

    console.log('Products in store:', products);
  }, [])

    

if(!products) {
  return <div className="text-center text-stone-400 py-20">Loading products...</div>;
}
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-serif text-stone-800">All Products</h2>
        <div className="flex bg-stone-100 p-1 rounded-lg">
          <button className="p-2 bg-white text-stone-800 rounded shadow-sm"><LayoutGrid size={18} /></button>
     
        <button className="p-2 text-stone-400 hover:text-stone-600"><List size={18} /></button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        { products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
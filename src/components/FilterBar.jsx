import { ChevronDown, Filter, LayoutGrid } from "lucide-react";

const FilterBar = () => {
  const filters = ["All Categories", "All Brands", "Price: Low to High", "Best Sellers", "Gender"];
  
  return (
    <div className="bg-white border-b border-stone-100 py-4 sticky top-20 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center flex-wrap gap-2">
          <button className="flex items-center space-x-2 border border-stone-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-stone-50">
            <Filter size={16} />
            <span>FILTERS</span>
          </button>
          
          <div className="h-6 w-[1px] bg-stone-200 mx-2 hidden md:block"></div>
          
          {filters.map((f, i) => (
            <button key={i} className="hidden sm:flex items-center space-x-2 text-sm text-stone-600 px-3 py-2 hover:text-stone-900 transition-colors">
              <span>{f}</span>
              <ChevronDown size={14} />
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-stone-400">24 Products Found</span>
          <button className="flex items-center space-x-2 border border-stone-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-stone-50 uppercase tracking-wide">
            <LayoutGrid size={16} className="text-stone-800" />
            <span>SORT BY</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar
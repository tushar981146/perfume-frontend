import { ArrowLeft } from 'lucide-react';

const Breadcrumb = () => (
  <div className="max-w-7xl mx-auto px-6 py-6">
    <button className="flex items-center gap-2 text-stone-400 hover:text-stone-900 text-xs transition-colors">
      <ArrowLeft size={14} /> Back to Shop
    </button>
  </div>
);

export default Breadcrumb;

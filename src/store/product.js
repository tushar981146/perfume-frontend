import {create} from 'zustand';
import service from '../lib/service';


const useProductStore = create((set) => ({
    products: null,
    loading: false,
    error: null,
    bestSellers: null,
    singleProduct: null,
    fetchProducts: async () => {
        set({ loading: true, error: null });
        try {
            const response = await service.get('/products');
            set({ products: response.data.products, loading: false });
            console.log('Fetched products:', response.data);
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    fetchBestSellers: async () => {
        set({ loading: true, error: null });
        try {
            const response = await service.get('/best-sellers');
            set({ bestSellers: response.data, loading: false });
            console.log('Fetched best sellers:', response.data);
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    fetchProductById: async (id) => {
        set({ loading: true, error: null });
        try {
            const response = await service.get(`/products/${id}`);
            set({ singleProduct: response.data.product, loading: false });
            console.log('Fetched product by ID:', response.data);
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    }


}));

export default useProductStore;
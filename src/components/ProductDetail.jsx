import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useProductStore from '../store/product'
import Loader from './Loader'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { products, loading } = useProductStore()
  const [product, setProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState('50ml')
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')


      const { fetchProductById, singleProduct } = useProductStore()

  useEffect(() => {
    if (singleProduct) {
      setProduct(singleProduct)
    } else {
      fetchProductById(id)
    }
  }, [id, fetchProductById, singleProduct])


  if (loading) {
    return (
      <Loader />
    )
  }

  if (!product) {
    return (
      <div className='min-h-screen w-full flex flex-col items-center justify-center overflow-x-hidden px-4'>
        <div className='text-center'>
          <h2 className='text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4'>Product Not Found</h2>
          <p className='text-gray-600 mb-8'>The product you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/products')}
            className='bg-amber-900 hover:bg-amber-950 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
          >
            Back to Products
          </button>
        </div>
      </div>
    )
  }

  const sizes = ['30ml', '50ml', '100ml']
  const price = product.price || 89.99

  return (
    
    <div className='min-h-screen bg-gradient-to-b from-amber-50 to-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
      <div className='mx-auto max-w-7xl'>
        {/* Breadcrumb */}
        <button
          onClick={() => navigate('/products')}
          className='inline-flex items-center text-amber-900 hover:text-amber-950 mb-8 font-medium transition-colors'
        >
          <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7' />
          </svg>
          Back to Products
        </button>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
          {/* Product Image */}
          <div className='flex items-center justify-center'>
            <div className='relative w-full aspect-square rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 overflow-hidden group'>
              <img
                src={product.image || '/static/images/cards/contemplative-reptile.jpg'}
                alt={product.name}
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
              />
              <div className='absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold'>
                -20%
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className='flex flex-col justify-start'>
            <div className='mb-4'>
              <span className='text-sm font-semibold text-amber-900 uppercase tracking-widest'>
                Premium Fragrance
              </span>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-2'>
                {product.name || 'Rose Elegance'}
              </h1>
            </div>

            {/* Rating */}
            <div className='flex items-center gap-3 mb-6'>
              <div className='flex items-center gap-1'>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className='w-5 h-5 text-yellow-400 fill-current' viewBox='0 0 20 20'>
                    <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                  </svg>
                ))}
              </div>
              <span className='text-lg font-bold text-gray-900'>4.8</span>
              <span className='text-gray-600'>(124 reviews)</span>
            </div>

            {/* Price */}
            <div className='flex items-baseline gap-4 mb-8'>
              <span className='text-4xl font-bold text-amber-900'>${price}</span>
              <span className='text-2xl text-gray-400 line-through'>${(price * 1.25).toFixed(2)}</span>
              <span className='bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold'>OFF 20%</span>
            </div>

            {/* Stock Status */}
            <div className='flex items-center gap-2 mb-8'>
              <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
              <span className='text-green-700 font-medium'>In Stock • Free Shipping Available</span>
            </div>

            {/* Size Selection */}
            <div className='mb-8'>
              <label className='block text-sm font-semibold text-gray-900 mb-4'>
                Select Size
              </label>
              <div className='flex gap-3 flex-wrap'>
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-3 rounded-lg font-semibold border-2 transition-all duration-300 ${
                      selectedSize === size
                        ? 'bg-amber-900 text-white border-amber-900'
                        : 'bg-white text-amber-900 border-amber-200 hover:border-amber-900'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className='mb-8 flex items-center gap-4'>
              <label className='text-sm font-semibold text-gray-900'>Quantity</label>
              <div className='flex items-center border border-gray-300 rounded-lg'>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className='px-4 py-2 hover:bg-gray-100 transition-colors'
                >
                  −
                </button>
                <span className='px-6 py-2 font-semibold'>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className='px-4 py-2 hover:bg-gray-100 transition-colors'
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 mb-8'>
              <button className='flex-1 bg-amber-900 hover:bg-amber-950 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2'>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 8m12-8l2 8m-12-8h12' />
                </svg>
                ADD TO CART
              </button>
              <button className='flex-1 border-2 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300 flex items-center justify-center gap-2'>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                </svg>
              </button>
            </div>

            {/* Features */}
            <div className='grid grid-cols-3 gap-4 pt-8 border-t border-gray-200'>
              <div className='text-center'>
                <div className='text-3xl mb-2'>🚚</div>
                <p className='text-xs sm:text-sm text-gray-700 font-medium'>Free Luxury Gift Wrapping</p>
              </div>
              <div className='text-center'>
                <div className='text-3xl mb-2'>✓</div>
                <p className='text-xs sm:text-sm text-gray-700 font-medium'>Made in France</p>
              </div>
              <div className='text-center'>
                <div className='text-3xl mb-2'>🌿</div>
                <p className='text-xs sm:text-sm text-gray-700 font-medium'>Cruelty Free</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className='mt-16 border-t border-gray-200 pt-12'>
          <div className='flex gap-8 border-b border-gray-200 mb-8 overflow-x-auto'>
            {['description', 'reviews', 'notes'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-semibold capitalize transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-amber-900 border-b-2 border-amber-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'description' && (
            <div className='max-w-2xl'>
              <p className='text-gray-700 leading-relaxed text-lg'>
                {product.description || 'A timeless floral fragrance that captures the essence of fresh roses at dawn. Rose Elegance opens with delicate peony and bergamot, blooming into a heart of Turkish rose and jasmine, finished with soft vanilla and white musk. Perfect for daily wear or special occasions.'}
              </p>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className='max-w-2xl'>
              <div className='space-y-6'>
                {[1, 2, 3].map((review) => (
                  <div key={review} className='p-4 border border-gray-200 rounded-lg'>
                    <div className='flex items-center gap-2 mb-2'>
                      <div className='flex gap-1'>
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className='w-4 h-4 text-yellow-400 fill-current' viewBox='0 0 20 20'>
                            <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                          </svg>
                        ))}
                      </div>
                      <span className='font-semibold text-gray-900'>Verified Purchase</span>
                    </div>
                    <p className='text-gray-700'>Absolutely stunning fragrance! Lasts all day and smells amazing. Highly recommend!</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'notes' && (
            <div className='max-w-2xl grid grid-cols-3 gap-6'>
              <div>
                <h4 className='font-semibold text-amber-900 mb-2'>Top Notes</h4>
                <p className='text-gray-700'>Bergamot, Peony, Grapefruit</p>
              </div>
              <div>
                <h4 className='font-semibold text-amber-900 mb-2'>Middle Notes</h4>
                <p className='text-gray-700'>Turkish Rose, Jasmine, Tuberose</p>
              </div>
              <div>
                <h4 className='font-semibold text-amber-900 mb-2'>Base Notes</h4>
                <p className='text-gray-700'>Vanilla, White Musk, Sandalwood</p>
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        <div className='mt-20'>
          <h2 className='text-3xl font-serif font-bold text-gray-900 mb-10'>You May Also Like</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className='group rounded-xl bg-white p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-amber-100'>
                <div className='relative h-40 sm:h-48 rounded-lg bg-gradient-to-br from-amber-100 to-amber-50 mb-4 overflow-hidden'>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent group-hover:from-black/20 transition-all duration-300' />
                </div>
                <h3 className='text-lg font-semibold text-gray-900 group-hover:text-amber-900 transition-colors'>Floral Essence</h3>
                <p className='mt-1 text-sm text-gray-600'>Fresh & Elegant</p>
                <div className='mt-4 flex items-center justify-between'>
                  <span className='text-lg font-bold text-amber-900'>$79.99</span>
                  <button className='bg-amber-900 hover:bg-amber-950 text-white p-2 rounded-lg transition-colors'>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 4v16m8-8H4' />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

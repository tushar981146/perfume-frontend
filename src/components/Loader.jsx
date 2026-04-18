import React from 'react'

function Loader() {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white'>
            <div className='text-center'>
                <div className='w-12 h-12 border-4 border-amber-900 border-t-transparent rounded-full animate-spin mx-auto mb-4' />
                <p className='text-gray-700'>Loading product...</p>
            </div>
        </div>
    )
}

export default Loader
import React from "react";

export default function FilterSection() {
    return (
        <div className="p-4 space-y-8">
          {/* Category Filter */}
          <div>
            <h4 className="text-2xl font-semibold fo text-white mb-3">Category</h4>
            <div className="space-y-2">
              {['Sports', 'Casual', 'Formal'].map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-medium text-white text-xl">{cat}</span>
                </label>
              ))}
            </div>
          </div>
    
          {/* Price Filter */}
          <div>
            <h4 className="text-2xl font-semibold fo text-white mb-3">Price Range</h4>
            <div className="space-y-2">
              {['$0 - $50', '$50 - $100', '$100+'].map((range, i) => (
                <label key={range} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-medium text-white text-xl">{range}</span>
                </label>
              ))}
            </div>
          </div>
    
          {/* Rating Filter */}
          <div>
            <h4 className="text-2xl font-semibold fo text-white mb-3">Rating</h4>
            <div className="space-y-2">
              {['4 stars & up', '3 stars & up'].map((rating) => (
                <label key={rating} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-yellow-500 bg-gray-100 border-gray-300 rounded focus:ring-yellow-400"
                  />
                  <span className="text-medium text-white text-xl">{rating}</span>
                </label>
              ))}
            </div>
          </div>
    
          {/* Availability Filter */}
          <div>
            <h4 className="text-2xl font-semibold fo text-white mb-3">Availability</h4>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
              />
              <span className="text-medium text-white text-xl">In Stock</span>
            </label>
          </div>
        </div>
      );
    
}

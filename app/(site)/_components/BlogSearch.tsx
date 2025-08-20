'use client'

import { useState } from 'react'
import { Search, X } from 'lucide-react'

interface BlogSearchProps {
  onSearch: (query: string) => void
  onCategoryFilter: (category: string | null) => void
  categories: string[]
  currentCategory?: string | null
}

export function BlogSearch({ 
  onSearch, 
  onCategoryFilter, 
  categories, 
  currentCategory 
}: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  const handleClearSearch = () => {
    setSearchQuery('')
    onSearch('')
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      {/* Search Form */}
      <form onSubmit={handleSearchSubmit} className="mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search articles..."
          />
          {searchQuery && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>
      </form>

      {/* Category Filters */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onCategoryFilter(null)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              !currentCategory
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryFilter(category)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                currentCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

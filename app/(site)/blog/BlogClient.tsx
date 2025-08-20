'use client'

import { useState, useEffect } from 'react'
import { BlogCard } from '../_components/BlogCard'
import { BlogSearch } from '../_components/BlogSearch'
import { BlogPagination } from '../_components/BlogPagination'
import { getPaginatedPosts } from '../../../lib/blog'
import type { BlogPost } from '../../../types/blog'

interface BlogClientProps {
  initialPosts: BlogPost[]
  categories: string[]
  totalPosts: number
  currentPage: number
  totalPages: number
  searchParams?: {
    page?: string
    category?: string
    search?: string
  }
}

export default function BlogClient({ 
  initialPosts, 
  categories, 
  totalPosts: initialTotalPosts,
  currentPage: initialCurrentPage,
  totalPages: initialTotalPages,
  searchParams 
}: BlogClientProps) {
  const [posts, setPosts] = useState(initialPosts)
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState(searchParams?.search || '')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(searchParams?.category || null)
  const [totalPosts, setTotalPosts] = useState(initialTotalPosts)
  const [currentPage, setCurrentPage] = useState(initialCurrentPage)
  const [totalPages, setTotalPages] = useState(initialTotalPages)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setLoading(true)
    
    // Update URL without refresh
    const params = new URLSearchParams(window.location.search)
    if (query) {
      params.set('search', query)
    } else {
      params.delete('search')
    }
    params.delete('page') // Reset to first page on search
    window.history.replaceState({}, '', `${window.location.pathname}${params.toString() ? `?${params}` : ''}`)

    // Filter posts client-side
    let filteredPosts = initialPosts
    
    if (query) {
      filteredPosts = initialPosts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.description.toLowerCase().includes(query.toLowerCase()) ||
        post.categories.some(cat => cat.toLowerCase().includes(query.toLowerCase())) ||
        post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      )
    }

    if (selectedCategory) {
      filteredPosts = filteredPosts.filter(post => post.categories.includes(selectedCategory))
    }

    setPosts(filteredPosts)
    setTotalPosts(filteredPosts.length)
    setCurrentPage(1)
    setTotalPages(Math.ceil(filteredPosts.length / 9))
    setLoading(false)
  }

  const handleCategoryFilter = (category: string | null) => {
    setSelectedCategory(category)
    setLoading(true)
    
    // Update URL without refresh
    const params = new URLSearchParams(window.location.search)
    if (category) {
      params.set('category', category)
    } else {
      params.delete('category')
    }
    params.delete('page') // Reset to first page on filter
    window.history.replaceState({}, '', `${window.location.pathname}${params.toString() ? `?${params}` : ''}`)

    // Filter posts client-side
    let filteredPosts = initialPosts

    if (searchQuery) {
      filteredPosts = initialPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase())) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    if (category) {
      filteredPosts = filteredPosts.filter(post => post.categories.includes(category))
    }

    setPosts(filteredPosts)
    setTotalPosts(filteredPosts.length)
    setCurrentPage(1)
    setTotalPages(Math.ceil(filteredPosts.length / 9))
    setLoading(false)
  }

  if (loading) {
    return (
      <main className="mx-auto container px-4 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-200 h-64 rounded-lg"></div>
            ))}
          </div>
        </div>
      </main>
    )
  }

  // Get featured posts for hero section
  const featuredPosts = posts.filter(post => post.featured).slice(0, 2)
  const regularPosts = posts.filter(post => !post.featured)

  return (
    <div className="mx-auto container px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Final Expense Lead Generation Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Expert insights on final expense lead generation, sales strategies, compliance best practices, and industry trends to help you succeed in the final expense insurance market.
        </p>
      </div>

      {/* Search and Filters */}
      <BlogSearch 
        onSearch={handleSearch}
        onCategoryFilter={handleCategoryFilter}
        categories={categories}
        currentCategory={selectedCategory}
      />

      {/* Results Summary */}
      <div className="mb-8">
        <p className="text-gray-600">
          {searchQuery && `Search results for "${searchQuery}" • `}
          {selectedCategory && `Category: ${selectedCategory} • `}
          {totalPosts} {totalPosts === 1 ? 'article' : 'articles'} found
        </p>
      </div>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && !searchQuery && !selectedCategory && currentPage === 1 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} featured />
            ))}
          </div>
        </section>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 ? (
        <section>
          {featuredPosts.length > 0 && !searchQuery && !selectedCategory && currentPage === 1 && (
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {regularPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      ) : posts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
          <p className="text-gray-600 mb-6">
            {searchQuery 
              ? `No articles match your search for "${searchQuery}"`
              : selectedCategory
                ? `No articles found in the "${selectedCategory}" category`
                : 'No blog posts have been published yet.'
            }
          </p>
          {(searchQuery || selectedCategory) && (
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory(null)
                setPosts(initialPosts)
                setTotalPosts(initialTotalPosts)
                setCurrentPage(initialCurrentPage)
                setTotalPages(initialTotalPages)
                window.history.replaceState({}, '', '/blog')
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Articles
            </button>
          )}
        </div>
      ) : null}

      {/* Pagination */}
      {totalPages > 1 && (
        <BlogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/blog"
          searchParams={new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '')}
        />
      )}

      {/* Newsletter Signup CTA */}
      <section className="bg-blue-50 rounded-2xl p-8 text-center mt-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Stay Updated with Industry Insights
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Get the latest final expense lead generation strategies, compliance updates, and industry trends delivered directly to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  )
}

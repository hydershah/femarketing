import Link from 'next/link'
import { Calendar, Clock, User, Share2, Twitter, Linkedin, Facebook } from 'lucide-react'
import { BlogPost } from '../../../types/blog'

interface BlogPostContentProps {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export function BlogPostContent({ post, relatedPosts }: BlogPostContentProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = `${post.title} - ${post.description}`

  const handleShare = (platform: string) => {
    let url = ''
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`
        break
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
        break
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        break
      default:
        return
    }
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex mb-8 text-sm text-gray-600">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{post.title}</span>
      </nav>

      <article className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="p-8 border-b border-gray-100">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category) => (
              <Link
                key={category}
                href={`/blog?category=${encodeURIComponent(category)}`}
                className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition-colors"
              >
                {category}
              </Link>
            ))}
            {post.featured && (
              <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-6">
            {post.description}
          </p>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            {post.lastModified && post.lastModified !== post.date && (
              <div className="flex items-center">
                <span>Updated: {new Date(post.lastModified).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
            )}
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          {/* Share buttons */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700 flex items-center">
              <Share2 className="h-4 w-4 mr-2" />
              Share:
            </span>
            <button
              onClick={() => handleShare('twitter')}
              className="p-2 text-gray-600 hover:text-blue-400 hover:bg-blue-50 rounded-full transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter className="h-4 w-4" />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </button>
            <button
              onClick={() => handleShare('facebook')}
              className="p-2 text-gray-600 hover:text-blue-800 hover:bg-blue-50 rounded-full transition-colors"
              aria-label="Share on Facebook"
            >
              <Facebook className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600 prose-a:hover:text-blue-700 prose-strong:text-gray-900 prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-blockquote:border-blue-200 prose-blockquote:bg-blue-50 prose-blockquote:py-1"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="px-8 pb-8">
            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?search=${encodeURIComponent(tag)}`}
                    className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>

      {/* Author Bio */}
      <div className="bg-gray-50 rounded-xl p-8 mt-12">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                {post.author.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {post.author.name}
            </h3>
            <p className="text-gray-600 mb-4">
              {post.author.bio}
            </p>
            <div className="flex gap-4">
              {post.author.twitter && (
                <a
                  href={`https://twitter.com/${post.author.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              {post.author.linkedin && (
                <a
                  href={`https://linkedin.com/in/${post.author.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {relatedPost.categories.slice(0, 1).map((category) => (
                      <span
                        key={category}
                        className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{relatedPost.readingTime} min read</span>
                    <time dateTime={relatedPost.date}>
                      {new Date(relatedPost.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
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

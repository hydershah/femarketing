import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import type { BlogPost, BlogPostFrontmatter, BlogListingPage, BlogCategory } from '../types/blog'

const BLOG_POSTS_PATH = path.join(process.cwd(), 'content/blog')

// Ensure blog directory exists
if (!fs.existsSync(BLOG_POSTS_PATH)) {
  fs.mkdirSync(BLOG_POSTS_PATH, { recursive: true })
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export function createExcerpt(content: string, maxLength: number = 160): string {
  const textContent = content.replace(/[#*`\[\]]/g, '').replace(/\n+/g, ' ')
  if (textContent.length <= maxLength) return textContent
  return textContent.substring(0, maxLength).replace(/\s+\w*$/, '') + '...'
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_POSTS_PATH)) return []
  return fs.readdirSync(BLOG_POSTS_PATH)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''))
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(BLOG_POSTS_PATH, `${slug}.md`)
    if (!fs.existsSync(fullPath)) return null
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const frontmatter = data as BlogPostFrontmatter
    
    // Generate HTML content
    const htmlContent = marked.parse(content) as string
    
    // Calculate reading time
    const readingTime = calculateReadingTime(content)
    
    // Create excerpt
    const excerpt = createExcerpt(content)
    
    const post: BlogPost = {
      slug,
      title: frontmatter.title,
      description: frontmatter.description,
      content: htmlContent,
      excerpt,
      date: frontmatter.date,
      lastModified: frontmatter.lastModified,
      author: frontmatter.author,
      categories: frontmatter.categories,
      tags: frontmatter.tags || [],
      readingTime,
      featured: frontmatter.featured || false,
      published: frontmatter.published ?? true,
      seo: {
        metaTitle: frontmatter.seo?.metaTitle || frontmatter.title,
        metaDescription: frontmatter.seo?.metaDescription || frontmatter.description,
        canonicalUrl: frontmatter.seo?.canonicalUrl,
        keywords: frontmatter.seo?.keywords || [...frontmatter.categories, ...(frontmatter.tags || [])],
        ogImage: frontmatter.seo?.ogImage
      },
      relatedPosts: frontmatter.relatedPosts
    }
    
    return post
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getAllPosts(options: {
  published?: boolean
  featured?: boolean
  category?: string
  tag?: string
  sortBy?: 'date' | 'title'
  sortOrder?: 'asc' | 'desc'
} = {}): BlogPost[] {
  const {
    published = true,
    featured,
    category,
    tag,
    sortBy = 'date',
    sortOrder = 'desc'
  } = options

  const slugs = getPostSlugs()
  let posts = slugs
    .map(slug => getPostBySlug(slug))
    .filter((post): post is BlogPost => {
      if (!post) return false
      if (published && !post.published) return false
      if (featured !== undefined && post.featured !== featured) return false
      if (category && !post.categories.includes(category)) return false
      if (tag && !post.tags.includes(tag)) return false
      return true
    })

  // Sort posts
  posts.sort((a, b) => {
    let comparison = 0
    
    if (sortBy === 'date') {
      comparison = new Date(a.date).getTime() - new Date(b.date).getTime()
    } else {
      comparison = a.title.localeCompare(b.title)
    }
    
    return sortOrder === 'desc' ? -comparison : comparison
  })

  return posts
}

export function getPaginatedPosts(
  page: number = 1,
  limit: number = 10,
  options: Parameters<typeof getAllPosts>[0] = {}
): BlogListingPage {
  const allPosts = getAllPosts(options)
  const totalPosts = allPosts.length
  const totalPages = Math.ceil(totalPosts / limit)
  const offset = (page - 1) * limit
  const posts = allPosts.slice(offset, offset + limit)
  
  return {
    posts,
    totalPosts,
    currentPage: page,
    totalPages,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
    categories: getAllCategories().map(cat => cat.name),
    tags: getAllTags()
  }
}

export function getAllCategories(): BlogCategory[] {
  const posts = getAllPosts()
  const categoryCount: Record<string, number> = {}
  
  posts.forEach(post => {
    post.categories.forEach(category => {
      categoryCount[category] = (categoryCount[category] || 0) + 1
    })
  })
  
  return Object.entries(categoryCount).map(([name, postCount]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    description: `Articles about ${name.toLowerCase()}`,
    postCount
  }))
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set<string>()
  
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  
  return Array.from(tags).sort()
}

export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  if (currentPost.relatedPosts && currentPost.relatedPosts.length > 0) {
    return currentPost.relatedPosts
      .map(slug => getPostBySlug(slug))
      .filter((post): post is BlogPost => post !== null && post.published)
      .slice(0, limit)
  }
  
  // Fallback: find posts with similar categories or tags
  const allPosts = getAllPosts()
    .filter(post => post.slug !== currentPost.slug)
  
  const scoredPosts = allPosts.map(post => {
    let score = 0
    
    // Score based on shared categories (higher weight)
    currentPost.categories.forEach(category => {
      if (post.categories.includes(category)) score += 3
    })
    
    // Score based on shared tags (lower weight)
    currentPost.tags.forEach(tag => {
      if (post.tags.includes(tag)) score += 1
    })
    
    return { post, score }
  })
  
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post)
}

export function generateBlogPostJsonLd(post: BlogPost, baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.seo.ogImage ? `${baseUrl}${post.seo.ogImage}` : undefined,
    author: {
      '@type': 'Person',
      name: post.author.name,
      description: post.author.bio,
      sameAs: [
        post.author.twitter && `https://twitter.com/${post.author.twitter}`,
        post.author.linkedin && `https://linkedin.com/in/${post.author.linkedin}`
      ].filter(Boolean)
    },
    publisher: {
      '@type': 'Organization',
      name: 'FE Marketing',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`
      }
    },
    datePublished: post.date,
    dateModified: post.lastModified || post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${post.slug}`
    },
    keywords: post.seo.keywords?.join(', '),
    articleSection: post.categories.join(', '),
    wordCount: post.content.split(/\s+/).length,
    timeRequired: `PT${post.readingTime}M`
  }
}

export function generateBlogListingJsonLd(posts: BlogPost[], baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'FE Marketing Blog',
    description: 'Expert insights on final expense lead generation, sales strategies, and compliance best practices.',
    url: `${baseUrl}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'FE Marketing',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`
      }
    },
    blogPost: posts.slice(0, 10).map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `${baseUrl}/blog/${post.slug}`,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author.name
      }
    }))
  }
}

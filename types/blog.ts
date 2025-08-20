export interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  excerpt: string
  date: string
  lastModified?: string
  author: {
    name: string
    bio: string
    avatar?: string
    twitter?: string
    linkedin?: string
  }
  categories: string[]
  tags: string[]
  readingTime: number
  featured: boolean
  published: boolean
  seo: {
    metaTitle?: string
    metaDescription?: string
    canonicalUrl?: string
    keywords?: string[]
    ogImage?: string
  }
  relatedPosts?: string[] // Array of slugs
}

export interface BlogPostFrontmatter {
  title: string
  description: string
  date: string
  lastModified?: string
  author: {
    name: string
    bio: string
    avatar?: string
    twitter?: string
    linkedin?: string
  }
  categories: string[]
  tags?: string[]
  featured?: boolean
  published?: boolean
  seo?: {
    metaTitle?: string
    metaDescription?: string
    canonicalUrl?: string
    keywords?: string[]
    ogImage?: string
  }
  relatedPosts?: string[]
}

export interface BlogListingPage {
  posts: BlogPost[]
  totalPosts: number
  currentPage: number
  totalPages: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  categories: string[]
  tags: string[]
}

export interface BlogCategory {
  name: string
  slug: string
  description: string
  postCount: number
}

export interface Post {
    slug: string;
    content: string;
    title: string;
    date: string;
    excerpt: string;
  }

export interface Posts {
  posts: Post[],
  totalPages: number
}
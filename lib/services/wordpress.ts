import { Posts } from "../model/wordpress";

const WP_API_URL = 'https://public-api.wordpress.com/rest/v1.1/sites/wp.joelj.ca';

export async function getPostsFromWordpress(page: number = 1, perPage: number = 5): Promise<Posts> {
  return await fetch(`${WP_API_URL}/posts?page=${page}&per_page=${perPage}`)
    .then(res => res.json().then(json => ({
      posts: json.posts,
      totalPages: Number(res.headers.get('X-WP-TotalPages'))
    })));
}
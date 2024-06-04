import fetchTrendingPosts from '$lib/server/posts/fetchTrending.js';
import fetchUsers from '$lib/server/users/fetch.js';

export async function load({ cookies }) {
    const users = await fetchUsers();
    const posts = await fetchTrendingPosts();

    return {
        avatar: cookies.get('avatar'),
        userId: cookies.get('id'),
        users: users,
        posts: posts
    }
}
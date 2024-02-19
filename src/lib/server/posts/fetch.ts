import type Post from "$lib/models/post";

export default async function fetchPosts(channel: string): Promise<Post[]|undefined> {
    try {
        const response = await fetch(`${import.meta.env.VITE_API}/posts`);
        
        const posts = await response.json();

        posts.forEach((post: any) => {
            post.content = JSON.parse(post.content);
        });
        
        return posts;

    } catch {
        return undefined;
    }
}
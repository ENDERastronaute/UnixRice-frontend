import type Post from "$lib/models/post";

export default async function fetchPosts(category: string): Promise<Post[]|undefined> {
    try {
        const response = await fetch(`${import.meta.env.VITE_API}/post/${category}`);
        const posts = await response.json();

        return posts;

    } catch {
        return undefined
    }
}
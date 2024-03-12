import type Post from "$lib/models/post";
import fetchOneUser from "../users/fetchOne";

export default async function fetchPosts(channel: string): Promise<Post[]|undefined> {
    try {
        
        const response = await fetch(`${import.meta.env.VITE_API}/posts/${channel}`);
        
        const posts: Post[] = await response.json();

        for (let i = 0; i < posts.length; i++) {
            posts[i].content = JSON.parse(posts[i].content as unknown as string);
        }
        
        return posts;

    } catch (err) {
        return undefined;
    }
}
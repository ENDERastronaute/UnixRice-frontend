import { PUBLIC_API_URL } from "$env/static/public";
import type Post from "$lib/models/post";

export default async function fetchPosts(channel: string): Promise<Post[]|undefined> {
    try {
        
        const response = await fetch(`${PUBLIC_API_URL}/posts/${channel}`);
        
        const posts: Post[] = (await response.json()).data;

        for (let i = 0; i < posts.length; i++) {
            posts[i].content = JSON.parse(posts[i].content as unknown as string);
        }
        
        
        return posts;

    } catch (err) {
        console.log(err);
        
        return undefined;
    }
}
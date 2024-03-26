import { API_URL } from "$env/static/private";
import type Post from "$lib/models/post";

export default async function createPost(title: string, description: string, images: any[], author: number, channel: string): Promise<Post|undefined> {
    const content = {
        title: title,
        paragraph: description,
        images: []
    }

    try {
        const response = await fetch(`${API_URL}/post`, {
            method: 'POST',
            body: JSON.stringify({
                content: content,
                author: author,
                channel: channel
            })
        })

        const post: Post = await response.json();

        return post;


    } catch (err) {
        console.error(err)
        return undefined;
    }
}
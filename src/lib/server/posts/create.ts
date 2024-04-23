import { PUBLIC_API_URL } from "$env/static/public";
import type Post from "$lib/models/post";

export default async function createPost(title: string, paragraph: string, images: any[], author: number, channel: string): Promise<Post|undefined> {
    const formData = new FormData();

    formData.append('content', JSON.stringify({ title: title, paragraph: paragraph }));
    formData.append('author', author.toString());
    formData.append('channel', channel);

    images.forEach((image, index) => {
        formData.append(`image_${index}`, image)
    })
    
    try {
        const response = await fetch(`${PUBLIC_API_URL}/post`, {
            method: 'POST',
            body: formData,
        })

        const post: Post = await response.json();

        return post;


    } catch (err) {
        console.error(err)
        return undefined;
    }
}
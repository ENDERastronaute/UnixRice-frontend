
import { createPost, deletePost, fetchPosts, updatePost } from "$lib/server/posts";
import type { PageServerLoadEvent } from "./$types.js";

export async function load({ cookies, params }: PageServerLoadEvent) {
    cookies.set('category', params.channel, { path: '/' });
    
    const posts = await fetchPosts(params.channel);
    
    if (posts) return { posts: posts };
}

export const actions = {
    create: async ({ cookies, request }) => {
        const data = await request.formData();
        const title = data.get('title') as string;
        const description = data.get('description') as string;
        const images = data.getAll('images');
        const author = "";
        const category = cookies.get('category') as string;

        createPost(title, description, images, 1, category)
    },

    update: async ({ request }) => {
        const data = await request.formData();
        const id = data.get('id') as string;
        const title = data.get('title') as string;
        const description = data.get('description') as string;

        updatePost(id, title, description);
    },

    delete: async ({ request }) => {
        const data = await request.formData();
        const id = data.get('id') as string;

        deletePost(id);
    }
}
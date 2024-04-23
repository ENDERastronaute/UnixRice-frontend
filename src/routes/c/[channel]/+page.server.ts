
import type Post from "$lib/models/post.js";
import { createPost, deletePost, fetchPosts, updatePost } from "$lib/server/posts";
import type { PageServerLoadEvent } from "./$types.js";

let posts: Post[] | undefined;

export async function load({ cookies, params }: PageServerLoadEvent) {
    cookies.set('channel', params.channel, { path: '/' });
    
    posts = await fetchPosts(params.channel); 
    
    if (posts) return {
        posts: posts,
        userId: cookies.get('id')
    };
}

export const actions = {
    create: async ({ cookies, request }) => {
        const data = await request.formData();
        const title = data.get('title') as string;
        const description = data.get('description') as string;
        const images = data.getAll('images');
        const author = cookies.get('id') as unknown as number;
        const category = cookies.get('channel') as string;

        const post = await createPost(title, description, images, author, category)

        if (posts && post) {
            posts = [...posts, post];

            // posts.push(post)
            // posts = posts;
        }
    },

    update: async ({ request }) => {
        const data = await request.formData();
        const id = data.get('id') as string;
        const title = data.get('title') as string;
        const paragraph = data.get('paragraph') as string;
        const images = data.get('images') as any;

        const postIndex: number = posts?.findIndex(post => post.id == id) as number;
        if (postIndex !== -1) {
            posts![postIndex].content.title = title;
            posts![postIndex].content.paragraph = paragraph;
            posts![postIndex].content.images = images;
            posts = [...posts!];
        }

        updatePost(id, images, title, paragraph);
    },

    delete: async ({ request }) => {
        const data = await request.formData();
        const id = data.get('id') as string;

        deletePost(id);
    }
}
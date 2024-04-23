import { PUBLIC_API_URL } from "$env/static/public";

export default function deletePost(id: string) {
    fetch(`${PUBLIC_API_URL}/post/${id}`, {
        method: 'DELETE'
    }) 
}
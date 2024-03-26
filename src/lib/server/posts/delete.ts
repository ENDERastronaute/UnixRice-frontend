import { API_URL } from "$env/static/private";

export default function deletePost(id: string) {
    fetch(`${API_URL}/post/${id}`, {
        method: 'DELETE'
    }) 
}
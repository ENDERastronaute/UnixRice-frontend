import { PUBLIC_API_URL } from "$env/static/public";

export default function deleteUser(id: string) {
    fetch(`${PUBLIC_API_URL}/user/${id}`, {
        method: 'DELETE'
    }) 
}
import { PUBLIC_API_URL } from "$env/static/public";

export default async function updateUser(id: string, email: string) {
    console.log(id);
    

    const res = await fetch(`${PUBLIC_API_URL}/user/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            email: email
        })
    })

    return await res.json();
}
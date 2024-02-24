import type User from "$lib/models/user";

export default async function fetchOneUser(id: string|number): Promise<User> {
    const response = await fetch(`${import.meta.env.VITE_API}/user/${id}`);

    return response.json();
}
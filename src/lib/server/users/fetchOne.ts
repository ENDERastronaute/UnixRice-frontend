import { API_URL } from "$env/static/private";
import type User from "$lib/models/user";

export default async function fetchOneUser(id: string|number): Promise<User> {
    const response = await fetch(`${API_URL}/user/${id}`);

    return await response.json();
}
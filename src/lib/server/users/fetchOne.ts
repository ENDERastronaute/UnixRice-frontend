import { PUBLIC_API_URL } from "$env/static/public";
import type User from "$lib/models/user";

export default async function fetchOneUser(id: string|number): Promise<User> {
    const response = await fetch(`${PUBLIC_API_URL}/user/${id}`);

    return await response.json();
}
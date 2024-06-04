import { PUBLIC_API_URL } from "$env/static/public";
import type User from "$lib/models/user";

export default async function fetchUsers(): Promise<User[]|undefined> {
    try {
        
        const response = await fetch(`${PUBLIC_API_URL}/users/`);
        
        const users: User[] = (await response.json()).data;
        
        return users;

    } catch (err) {
        console.log(err);
        
        return undefined;
    }
}
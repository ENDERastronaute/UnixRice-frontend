import { API_URL } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export async function load({ url, cookies }) {
    const code = url.searchParams.get('code');

    const response = await fetch(`${API_URL}/login?code=${code}`);

    const result = await response.json()

    if (result) {
        const { avatar, id } = result;

        cookies.set('id', id, {
            path: '/'
        })
    
        cookies.set('avatar', avatar, {
            path: '/'
        })
    }

    throw redirect(303, '/')
}
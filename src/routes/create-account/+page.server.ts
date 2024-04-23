import { PUBLIC_API_URL } from '$env/static/public';
import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();
        const id = formData.get('id') as string;
        const email = formData.get('email');
        const password = formData.get('password');

        const response = await fetch(`${PUBLIC_API_URL}/user`, {
            method: 'post',
            body: JSON.stringify({
                id: id,
                email: email,
                password: password
            })
        })

        const avatar = await response.json();

        cookies.set('id', id, {
            path: '/'
        })

        cookies.set('avatar', avatar, {
            path: '/'
        })

        throw redirect(303, '/');
    }
}
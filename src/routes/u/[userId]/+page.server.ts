import fetchOneUser from "$lib/server/users/fetchOne";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoadEvent } from "./$types";
import updateUser from "$lib/server/users/update";
import deleteUser from "$lib/server/users/delete";

let user;

export async function load({ cookies, params }: PageServerLoadEvent) {
    const userId = params.userId;

    user = await fetchOneUser(userId);

    if (Object.keys(user).length === 0) {
        throw redirect(303, '/');
    }

    return {
        user: user,
        userId: cookies.get('id')
    }
}

export const actions = {
    update: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email') as string;
        const id = data.get('id') as string;

        user = await updateUser(id, email);
    },

    delete: async ({ cookies, request }) => {
        const data = await request.formData();
        const id = data.get('id') as string;

        deleteUser(id);

        cookies.delete('id', { path: '/' });
        cookies.delete('avatar', { path: '/' });

        redirect(303, '/');
    },

    logout: async ({ cookies }) => {
        cookies.delete('id', { path: '/' });
        cookies.delete('avatar', { path: '/' });

        redirect(303, '/');
    }
}
import { PUBLIC_API_URL } from "$env/static/public";

export default function updatePost(id: string, images: string, title: string, paragraph: string) {
    const content = {
        title: title,
        paragraph: paragraph,
        images: JSON.parse(images)
    }

    fetch(`${PUBLIC_API_URL}/post/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            content: content
        })
    })
}
import { API_URL } from "$env/static/private";

export default function updatePost(id: string, images: string, title: string, paragraph: string) {
    console.log(paragraph);


    const content = {
        title: title,
        paragraph: paragraph,
        images: images.split(',')
    }

    fetch(`${API_URL}/post/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            content: content
        })
    })
}
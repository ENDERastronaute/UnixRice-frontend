
export default function updatePost(id: string, images: string, title: string, paragraph: string) {
    console.log(paragraph);


    const content = {
        title: title,
        paragraph: paragraph,
        images: images.split(',')
    }

    fetch(`${import.meta.env.VITE_API}/post/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            content: content
        })
    })
}
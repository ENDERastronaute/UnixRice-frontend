
export default function createPost(title: string, description: string, images: any[], author: number, category: string) {
    const content = {
        title: title,
        paragraph: description,
        images: images
    }

    fetch(`${import.meta.env.VITE_API}/post`, {
        method: 'POST',
        body: JSON.stringify({
            content: content,
            author: author,
            category: category
        })
    })
}
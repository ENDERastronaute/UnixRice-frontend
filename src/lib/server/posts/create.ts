
export default function createPost(title: string, description: string, images: any[], author: number, category: string) {
    fetch(`${import.meta.env.VITE_API}/post`, {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            description: description,
            images: images,
            author: author,
            category: category
        })
    })
}
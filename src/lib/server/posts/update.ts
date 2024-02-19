
export default function updatePost(id: string, title: string, description: string) {
    fetch(`${import.meta.env.VITE_API}/post`, {
        method: 'PUT',
        body: JSON.stringify({
            id: id,
            title: title,
            description: description
        })
    })
}
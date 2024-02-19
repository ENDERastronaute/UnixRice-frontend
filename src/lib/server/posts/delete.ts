
export default function deletePost(id: string) {
    fetch(`${import.meta.env.VITE_API}/post`, {
        method: 'DELETE',
        body: JSON.stringify({
            id: id
        })
    })
}
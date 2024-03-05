
export default function deletePost(id: string) {
    fetch(`${import.meta.env.VITE_API}/post/${id}`, {
        method: 'DELETE'
    }) 
}
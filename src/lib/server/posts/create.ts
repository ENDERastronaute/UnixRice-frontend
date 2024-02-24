
export default async function createPost(title: string, description: string, images: any[], author: number, channel: string) {
    const content = {
        title: title,
        paragraph: description,
        images: []
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_API}/post`, {
            method: 'POST',
            body: JSON.stringify({
                content: content,
                author: author,
                channel: channel
            })
        })
    
        console.log(await response.json());

    } catch (err) {
        console.error(err)
        return (false)
    } 
}
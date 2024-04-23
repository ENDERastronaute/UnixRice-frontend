
export function load({ cookies }) {
    return {
        avatar: cookies.get('avatar'),
        userId: cookies.get('id')
    }
}
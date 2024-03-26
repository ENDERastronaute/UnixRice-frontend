
export function load({ cookies }) {
    return {
        avatar: cookies.get('avatar')
    }
}
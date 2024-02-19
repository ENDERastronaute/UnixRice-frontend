
export default interface Post {
    id: string;
    channelId: number;
    author: number;
    content: {
        title: string;
        paragraph?: string;
        images: any[];
    };
}
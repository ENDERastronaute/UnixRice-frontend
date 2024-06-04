import type User from "./user";
import type Vote from './vote';

export default interface Post {
    id: string;
    channel_id: number;
    channel: string;
    author_id: number;
    username: string;
    avatar: string;
    votes: Vote[];
    content: {
        title: string;
        paragraph?: string;
        images: any[];
    };
}
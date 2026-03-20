import { APIRequestContext } from '@playwright/test';

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export class JsonPlaceHolderClient {
    constructor(private request: APIRequestContext) {}

    async getPostById(id: number): Promise<Post> {
        const response = await this.request.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

        if (response.status() !== 200) {
            throw new Error(`Unexpected status: ${response.status()}`);
        }

        const body = await response.json();

        return body as Post;
    }
}
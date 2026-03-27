import { APIRequestContext } from '@playwright/test';

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

//Method to GET response 
export class JsonPlaceHolderClient {
    constructor(private request: APIRequestContext) {}

    async getPostById(id: number) {
        const response = await this.request.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

        return {
            status: response.status(),
            body: await response.json()
        };
    }
}
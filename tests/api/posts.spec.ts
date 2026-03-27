import {test, expect} from '@playwright/test'
import { JsonPlaceHolderClient } from '../../api-clients/jsonPlaceholderClient';

test('GET /posts1 returns correct post', async ({ request }) => {
    //Use constructor 
    const client = new JsonPlaceHolderClient(request)

    const {status, body} = await client.getPostById(1);

    //check post to have specific id and to contain a title and body
    expect(body.id).toBe(1);
    expect(body.title).toBeTruthy();
    expect(body.body).toBeTruthy();
});

test('GET invalid post returns error', async ({ request }) => {
    const client = await new JsonPlaceHolderClient(request);
    const {status, body} = await client.getPostById(9999);

    // await expect(client.getPostById(9999)).rejects.toThrow();
    expect(status).toBe(404);
    expect(body).toEqual({});
});
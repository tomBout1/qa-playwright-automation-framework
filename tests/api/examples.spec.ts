import { test, expect, APIRequestContext} from '@playwright/test'
import { JsonPlaceHolderClient } from '../../api-clients/jsonPlaceholderClient';

// Helper function
function createClient(request: APIRequestContext) {
    return new JsonPlaceHolderClient(request);
}

test ('get post 1', async ({ request }) => {
    const client = createClient(request);
    const {status, body} = await client.getPostById(1);

    expect(status).toBe(200);
    expect(body.id).toBe(1);

    console.log("Response:", body);
    console.log("Status:", status);
});

test ('get post 2', async ({ request }) => {
    const client = createClient(request);
    const {status, body} = await client.getPostById(2);

    expect(status).toBe(200);
    expect(body.id).toBe(2);

    console.log("Response", body );
    console.log("Status", status);
});

test('invalid post', async ({ request }) => {
    const client = createClient(request);
    const {status, body} = await client.getPostById(9999);

    expect(status).toBe(404);
    // expect(body.id).toBe(undefined);
    expect(body).toEqual({});

    console.log("Response", body);
})
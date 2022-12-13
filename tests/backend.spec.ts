import { test, expect } from '@playwright/test'

test.describe('Backend', () => {
    test('backend communication check', async ({ request }) => {
        const orderInfo = await request.get(`/api/getTest`)
        expect(orderInfo.ok()).toBeTruthy()
    })
})
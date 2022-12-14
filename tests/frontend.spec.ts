import { test, expect } from '@playwright/test'

test.describe('Frontend', () => {
  test('has title', async ({ page }) => {
    await page.goto('/')
    const title = page.locator('main > div > p.text-elem')
    await expect(title).toBeVisible()
    await expect(title).toContainText(['Boilerplate Project'])
  })
})
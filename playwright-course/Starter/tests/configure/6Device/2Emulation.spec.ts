import { test, devices } from '@playwright/test'

const iphone = devices['iPhone 13 Pro']
 

test.use({
    baseURL: '',
    ...iphone, 
})

test('Observe window', async ({ page }) => {
    await page.goto('https://www.google.com/')
    await page.pause()
})
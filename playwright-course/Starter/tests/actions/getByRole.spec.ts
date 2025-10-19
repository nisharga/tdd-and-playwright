import { test, expect } from '@playwright/test'

test('Get By Role Test', async({page}) => {
    await page.goto('http://localhost:5000');
    const serviceHeading = page.getByRole('heading', {
        name: 'our service'
    })
    await expect(serviceHeading).toBeVisible()
})
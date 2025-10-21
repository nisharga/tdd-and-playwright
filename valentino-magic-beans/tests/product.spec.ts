import { test, expect } from '@playwright/test';
import { addContactInfo, addPaymentInfo, addShippingAddress, placeOrder, testValues } from './pages/Checkout';
import { addProductToCart } from './pages/Products';
import { clickTrackOrder, fillOrderIdAndEmail } from './pages/Contacts';

test('Complete workflow for product order', async ({ page }) => {
    await page.goto('/products');

    const addedProduct = await addProductToCart(page, 1);

    await page.locator('[data-test-id="header-cart-button"]').getByRole('button').click();

    await page.getByRole('button', { name: 'Proceed to Checkout' }).click();

    await addContactInfo(page)
    await addPaymentInfo(page)
    await addShippingAddress(page)
    await placeOrder(page)

    // order id get
    const orderWrapper = page.getByText('Your Order ID is:').locator('..')
    const orderId = await orderWrapper.getByRole('paragraph').nth(1).textContent()
   
    // track your order page
    await page.getByRole('button', { name: 'Track Your Order' }).click();
    
    // after form fill go next page
    await fillOrderIdAndEmail(page, orderId!, testValues.email)
    await clickTrackOrder(page);

    const firstOrder = page.getByText(addedProduct.name!)
    await expect(firstOrder).toBeVisible()
 
})
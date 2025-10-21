import { test, expect } from '@playwright/test';
import { addProductToCart } from '../pages/Products';
import { assertProduct, getSubTotal } from '../pages/Cart';

test('cart test', async ({ page }) => {
  await page.goto('https://valentinos-magic-beans.click/products');

  const addProduct = await addProductToCart(page, 1);
  
  //  data-test-id="header-cart-button" (this is we add on the redirect button or a tag) 
  await page.locator('[data-test-id="header-cart-button"]').getByRole('button').click();

  await assertProduct(page, addProduct.name!)

  const subTotal = await getSubTotal(page)

  expect(subTotal).toBe(addProduct.price);

  console.log("🚀 ~ subTotal:", subTotal)
  console.log("🚀 ~ addProduct.price:", addProduct.price)
 
  await page.pause();
});
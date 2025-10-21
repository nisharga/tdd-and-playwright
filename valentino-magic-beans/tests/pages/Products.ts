import { type Page } from '@playwright/test';

export async function addProductToCart(page: Page, index: number){

  const wrapper = page.locator('.p-6').first();
  const productName = await wrapper.getByRole('heading').first().textContent() ?? '';
  const productPrice = await wrapper.locator('.text-2xl.font-bold.text-gold-600').first().textContent() ?? '';
  
  await page.getByRole("button", {
    name: 'Add to Cart',
    exact: true
  }).first().click();

    return {
        name: productName,
        price: Number(productPrice?.substring(1))
    }

}
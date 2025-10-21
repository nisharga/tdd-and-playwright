import { test } from '@playwright/test'; 
import * as signUpPage from './pages/signUp';
import * as loginPage from './pages/login';
import { EmailUtils } from './utils/EmailUtils';

// test('Sign up', async ({ page }) => {
//   const emailUtils = new EmailUtils();
//   const inbox = await emailUtils.createInbox();
//   await page.goto('/signup');
//   await signUpPage.signUp(page, inbox.emailAddress);
//   const email = await emailUtils.waitForLatestEmail(inbox.id);
//   console.log(email);
 
//     // get the code\ from the email body:
//     const code = /([0-9]{6})$/.exec(email?.body!)![1];

//     await signUpPage.addConfirmationCode(page, code)

//     await loginPage.login(page, inbox.emailAddress, '1234567zxcGJr!')
 
//   page.pause();
// });

test('Login', async ({ page }) => {
  await page.goto('/login');
  await loginPage.login(page, 'ed4d7308-f4b7-4b7e-a24f-f92f979c790e@mailslurp.world', '1234567zxcGJr!')
  await page.goto('/login');
  page.pause();
});
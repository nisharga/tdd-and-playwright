import path from 'path';
import fs from 'fs';
import { test } from '@playwright/test'; 
import { login, verifySuccessfulLogin } from './pages/login';

const authSessionFile = path.resolve(__dirname, './../playwright/.auth/user.json');

 
test('authenticate', async ({ page }) => { 
    await page.goto('/login')

    await login(
        page,
        'ed4d7308-f4b7-4b7e-a24f-f92f979c790e@mailslurp.world',
        '1234567zxcGJr!'
    )
    await verifySuccessfulLogin(page)

    await page.context().storageState({
        path: authSessionFile
    })
})
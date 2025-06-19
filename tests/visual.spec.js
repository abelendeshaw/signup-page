import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';

test.describe('Visual tests', () => {
  test('Homepage visual test', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await percySnapshot(page, 'Homepage');
  });

  test('About page visual test', async ({ page }) => {
    await page.goto('/signup');
    await page.waitForLoadState('networkidle');
    await percySnapshot(page, 'About Page');
  });
});
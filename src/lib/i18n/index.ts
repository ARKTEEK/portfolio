import { init, register } from 'svelte-i18n';

export type Locale = 'en' | 'lt';
export const LOCALES: Locale[] = ['en', 'lt'];
const DEFAULT_LOCALE: Locale = 'en';

register('en', () => import('./locales/en.json'));
register('lt', () => import('./locales/lt.json'));

let initialized = false;

export function initI18n(): void {
  if (initialized) return;
  initialized = true;

  init({
    fallbackLocale: DEFAULT_LOCALE,
    initialLocale: DEFAULT_LOCALE,
  });
}

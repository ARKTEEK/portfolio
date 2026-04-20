import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Locale = 'en' | 'lt';

const initialLocale = (browser ? (localStorage.getItem('locale') as Locale) : 'en') || 'en';

export const locale = writable<Locale>(initialLocale);

locale.subscribe((value) => {
  if (browser) localStorage.setItem('locale', value);
});

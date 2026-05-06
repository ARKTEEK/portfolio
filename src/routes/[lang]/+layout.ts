import { LOCALES, type Locale } from '$lib/i18n';
import { redirect } from '@sveltejs/kit';
import { locale, waitLocale } from 'svelte-i18n';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ params, url }) => {
  const { lang } = params;

  if (!lang || !LOCALES.includes(lang as Locale)) {
    const defaultLocale = 'en';
    const path = url.pathname === '/' ? '' : url.pathname;
    throw redirect(307, `/${defaultLocale}${path}`);
  }

  locale.set(lang);

  await waitLocale(lang);

  return {
    lang: lang as Locale
  };
};

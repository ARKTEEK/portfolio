import { LOCALES } from '$lib/i18n';
import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) => {
  return (LOCALES as readonly string[]).includes(param);
};

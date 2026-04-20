import { browser } from '$app/environment';
import { writable } from 'svelte/store';

function createSidebarStore() {
  const initial = browser
    ? localStorage.getItem('sidebar-open') !== 'false'
    : true;

  const { subscribe, update } = writable<boolean>(initial);

  return {
    subscribe,
    toggle() {
      update(v => {
        const next = !v;
        if (browser) localStorage.setItem('sidebar-open', String(next));
        return next;
      });
    },
  };
}

export const sidebarOpen = createSidebarStore();

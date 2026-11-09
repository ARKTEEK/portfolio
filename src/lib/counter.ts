import { writable } from "svelte/store";

export const visitorCount = writable<number | null>(null);

export async function fetchVisitorCount(key: string) {
  try {
    const response = await fetch(`https://countapi.mileshilliard.com/api/v1/hit/${key}`);
    const data = await response.json();

    visitorCount.set(data.value);
  } catch (error) {
    console.error("Failed to load visitor count", error);
    visitorCount.set(0);
  }
}

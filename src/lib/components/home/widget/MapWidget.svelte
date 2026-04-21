<script lang="ts">
  import { browser } from "$app/environment";
  import { onDestroy, onMount } from "svelte";

  let mapElement: HTMLDivElement;
  let map: import("leaflet").Map;

  const KAUNAS: [number, number] = [54.8985, 23.9036];

  onMount(async () => {
    if (!browser) return;
    const L = await import("leaflet");

    map = L.map(mapElement, {
      zoomControl: false,
      attributionControl: false,
      dragging: true,
      scrollWheelZoom: false,
      touchZoom: false,
      doubleClickZoom: false,
      keyboard: false,
    }).setView(KAUNAS, 12);

    L.tileLayer(
      "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
      { maxZoom: 20, attribution: "" },
    ).addTo(map);

    L.marker(KAUNAS, {
      icon: L.divIcon({
        className: "custom-marker",
        html: `<div class="mc"><div class="mp"></div><div class="mr"></div><div class="mk"></div></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      }),
    }).addTo(map);
  });

  onDestroy(() => map?.remove());
</script>

<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

<div bind:this={mapElement} class="w-full h-full"></div>

<style>
  :global(.custom-marker) {
    background: transparent !important;
    border: none !important;
  }

  :global(.mc) {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }

  :global(.mp) {
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 9999px;
    background-color: var(--color-accent, #6366f1);
    opacity: 0.3;
    animation: mpulse 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  :global(.mr) {
    position: absolute;
    width: 13px;
    height: 13px;
    border-radius: 9999px;
    border: 1.5px solid var(--color-accent, #6366f1);
  }

  :global(.mk) {
    position: relative;
    width: 7px;
    height: 7px;
    border-radius: 9999px;
    background-color: var(--color-accent, #6366f1);
    border: 2px solid rgba(255, 255, 255, 0.85);
    box-shadow: 0 0 8px var(--color-accent, #6366f1);
  }
  @keyframes mpulse {
    0% {
      transform: scale(0.8);
      opacity: 0.3;
    }
    70% {
      transform: scale(2.4);
      opacity: 0;
    }
    100% {
      transform: scale(0.8);
      opacity: 0;
    }
  }

  :global(.leaflet-control-container) {
    display: none !important;
  }

  :global(.leaflet-tile-pane) {
    filter: brightness(0.8) contrast(1.05) saturate(0.9);
  }

  :global(.leaflet-container) {
    background-color: transparent !important;
    border-radius: inherit;
  }
</style>

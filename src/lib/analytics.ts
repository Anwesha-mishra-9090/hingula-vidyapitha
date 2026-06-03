export function trackPageView(path: string) {
  // Lightweight, privacy-first pageview tracker placeholder.
  // Replace with your analytics endpoint (Plausible, GA4, or self-hosted) as needed.
  try {
    // Example: send to a server endpoint
    // navigator.sendBeacon('/api/collect', JSON.stringify({ path, ts: Date.now() }));
    console.debug('[analytics] pageview', path);
  } catch (e) {
    // ignore
  }
}

export function trackEvent(name: string, payload?: Record<string, any>) {
  console.debug('[analytics] event', name, payload);
}

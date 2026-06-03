declare global {
  interface Window {
    plausible?: any;
    gtag?: any;
  }
}

const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
const GA_ID = import.meta.env.VITE_GA_ID;

export async function initAnalytics() {
  if (typeof window === 'undefined') return;
  try {
    if (PLAUSIBLE_DOMAIN) {
      const src = `https://plausible.io/js/plausible.js`;
      if (!document.querySelector(`script[src="${src}"]`)) {
        const s = document.createElement('script');
        s.src = src;
        s.defer = true;
        s.setAttribute('data-domain', PLAUSIBLE_DOMAIN as string);
        document.head.appendChild(s);
      }
    }

    if (GA_ID) {
      if (!document.querySelector(`script[data-ga]`)) {
        const s1 = document.createElement('script');
        s1.async = true;
        s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
        s1.setAttribute('data-ga', 'true');
        document.head.appendChild(s1);

        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);} // eslint-disable-line no-inner-declarations
        window.gtag = gtag;
        window.gtag('js', new Date());
        window.gtag('config', GA_ID, { anonymize_ip: true });
      }
    }
  } catch (e) {
    // ignore
  }
}

export function trackPageView(path: string) {
  try {
    if (PLAUSIBLE_DOMAIN && typeof window !== 'undefined' && window.plausible) {
      window.plausible('pageview');
    }
    if (GA_ID && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', { page_path: path });
    }
    console.debug('[analytics] pageview', path);
  } catch (e) {
    // ignore
  }
}

export function trackEvent(name: string, payload?: Record<string, any>) {
  try {
    if (PLAUSIBLE_DOMAIN && typeof window !== 'undefined' && window.plausible) {
      window.plausible(name, { props: payload });
    }
    if (GA_ID && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', name, payload || {});
    }
    console.debug('[analytics] event', name, payload);
  } catch (e) {
    // ignore
  }
}

export default { initAnalytics, trackPageView, trackEvent };

export function setMeta(title: string, description?: string) {
  if (typeof document === 'undefined') return;
  document.title = title;
  if (description) {
    let el = document.querySelector('meta[name="description"]');
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', 'description');
      document.head.appendChild(el);
    }
    el.setAttribute('content', description);
  }
}

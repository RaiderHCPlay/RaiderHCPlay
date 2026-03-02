export function init() {
  if (typeof window === 'undefined') return;

  const saved: string = localStorage.getItem('raiderhcplay-website-theme') || 'normal';

  setTheme(saved);
}

export function setTheme(val: string) {
  if (typeof window !== 'undefined') {
    document.documentElement.dataset.theme = val;
    localStorage.setItem('raiderhcplay-website-theme', val);
  }
}

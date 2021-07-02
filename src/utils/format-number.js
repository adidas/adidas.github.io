export function formatNumber(value) {
  const lang = process.browser ? navigator.language : 'en';

  return new Intl.NumberFormat(lang).format(value);
}

export function formatNumber(value) {
  return new Intl.NumberFormat(navigator.language).format(value);
}

export function formatNumber(value) {
  return new Intl.NumberFormat().format(value);
}

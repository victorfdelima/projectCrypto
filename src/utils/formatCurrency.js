export function formatCurrency(value = 0, removePrefix = false) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 1,
  })
    .format(value)
    .replace('$', removePrefix ? '' : '$');
}

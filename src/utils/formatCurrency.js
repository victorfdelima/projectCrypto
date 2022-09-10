export function formatCurrency(value = 0, removePrefix = false) {
  console.log(value);

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 1,
  })
    .format(value)
    .replace('$', removePrefix ? '' : '$');
}

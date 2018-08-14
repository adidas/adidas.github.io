const GROUP_LENGTH = 3;
const NUMBER_DECIMAL_SEPARATOR = '.';
const separatorDefaults = {
  groupSeparator: '.',
  decimalSeparator: ','
};

export function formatNumber(value, { groupSeparator, decimalSeparator } = separatorDefaults) {
  const [ integer, decimals ] = `${ value }`.split(NUMBER_DECIMAL_SEPARATOR);
  const chars = `${ integer }`.split('').reverse();
  const parts = Math.ceil(chars.length / GROUP_LENGTH);
  const groups = [];

  for (let i = 0; i < parts; i++) {
    groups.push(chars.slice(i * GROUP_LENGTH, (i + 1) * GROUP_LENGTH).reverse().join(''));
  }

  const groupedInteger = groups.reverse().join(groupSeparator);

  return decimals ? [ groupedInteger, decimals ].join(decimalSeparator) : groupedInteger;
}

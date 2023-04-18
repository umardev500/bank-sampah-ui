export const toPrice = (price: string | number, prefix?: string) => {
  if (prefix === undefined) {
    prefix = '';
  }
  const isNumber = typeof price === 'number';

  const str = isNumber ? price.toString() : price;
  const left = str.length % 3;
  const leftNum = str.substring(0, left);
  const tho = str.substring(left).match(/\d{3}/gi);

  let result = leftNum;

  if (tho != null && tho.length > 0) {
    const sep = left > 0 ? '.' : '';
    result = `${leftNum}${sep}${tho.join('.')}`;
  }

  if (result.length !== 0) {
    result = prefix + result;
  }

  return result;
};

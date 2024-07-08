export default function cleanSet(set, startString) {
  if (typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  return [...set]
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length))
    .join('-');
}

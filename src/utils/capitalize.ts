export function capitalize(string: string = '') {
  const first = string[0];
  const rest = string.slice(1);

  return `${first?.toUpperCase()}${rest?.toLowerCase()}`;
}

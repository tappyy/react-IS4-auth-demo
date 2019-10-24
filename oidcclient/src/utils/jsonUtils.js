export const prettifyJson = (value) => {
  return JSON.stringify(value, null, 2);
}
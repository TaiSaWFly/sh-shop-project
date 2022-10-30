export function definedLengthArray(data, arrayLength = 4) {
  const definedLength = data.filter((d, index) => index < arrayLength);
  return definedLength;
}

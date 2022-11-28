export function countDataLengthByDataId(data, dataId, key) {
  let count = 0;
  for (const d in data) {
    if (data[d][key] === dataId) {
      count += 1;
    }
  }

  return count !== 0 ? count : null;
}

export function getDataByIds(dataIds, data) {
  const newData = [];
  for (const dataId of dataIds) {
    for (const d of data) {
      if (d.id === dataId) {
        newData.push(d);
      }
    }
  }
  return newData;
}

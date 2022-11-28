export function findDataId(id, findData) {
  const data = findData.find((d) => d.id === id);
  return data;
}

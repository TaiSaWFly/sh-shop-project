export function transformDataForSelect(data) {
  const transformData = data.map((d) => ({ value: d.id, label: d.name }));
  return transformData;
}

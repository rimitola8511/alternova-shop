export const formatCurrency = (
  value: number,
  style: string = "currency",
  currency: string = "COP",
  region: string = "es-CO"
): string => {
  return new Intl.NumberFormat(region, {
    style,
    currency,
    minimumFractionDigits: 2,
  }).format(value);
};

const createTxtFile = (content: string) => {
  return new Blob([content], { type: "text/plain" });
};

export const downloadFile = (content: string, fileName: string) => {
  const file = createTxtFile(content);
  const a = document.createElement("a");
  const url = URL.createObjectURL(file);
  a.href = url;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
};

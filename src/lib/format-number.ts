export default function formatNumber(value: string) {
  const parts = value.split(".");
  const formattedValue = Intl.NumberFormat("en-GB", {
    style: "decimal",
  }).format(Number(parts[0]));

  return parts.length > 1 ? formattedValue + `.${parts[1]}` : formattedValue;
}

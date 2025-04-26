export default function formatNumber(value: number) {
  return Intl.NumberFormat("en-GB", { style: "decimal" }).format(value);
}

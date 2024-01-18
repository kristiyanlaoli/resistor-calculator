export default function formatNumber(num) {
  const map = [
    { suffix: "G", threshold: 1e9 },
    { suffix: "M", threshold: 1e6 },
    { suffix: "K", threshold: 1e3 },
    { suffix: "", threshold: 1 },
  ];

  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (found) {
    return (
      parseFloat(String((num / found.threshold).toFixed(2))) + found.suffix
    );
  }

  return parseFloat(String(num));
}

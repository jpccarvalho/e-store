export function formatMoney(value: number | string): string {
  const number =
    typeof value === "string"
      ? parseFloat(value.replace(/[^\d.-]/g, ""))
      : value;

  if (isNaN(number)) {
    return "R$ 0,00";
  }

  const fixed = number.toFixed(2);

  const [integerPart, decimalPart] = fixed.split(".");

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return `R$ ${formattedInteger},${decimalPart}`;
}

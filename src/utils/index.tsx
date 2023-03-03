export const currencyFormatter = ({
  currency,
  value,
  minimumFractionDigits,
}: {
  currency: string;
  value: number;
  minimumFractionDigits: number;
}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    minimumFractionDigits,
    currency,
  });
  return formatter.format(value);
};

interface IFormatCurrencyProps {
  amount: number;
  locale?: string;
  currency?: string;
}
export const formatCurrency = ({
  amount = 0,
  locale = 'en-US',
  currency = 'USD',
}: IFormatCurrencyProps): string => {
  if (isNaN(amount) || typeof amount !== 'number') {
    throw new Error('Invalid amount');
  }

  if (typeof locale !== 'string' || typeof currency !== 'string') {
    throw new Error('Invalid locale or currency');
  }

  return amount.toLocaleString(locale, {
    style: 'currency',
    currency,
  });
};

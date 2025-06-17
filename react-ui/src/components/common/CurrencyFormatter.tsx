export const useCurrencyFormatter = (currency: string = 'EUR', locale: string = 'de-DE') => {
  return (amount: number) => amount.toLocaleString(locale, { 
    style: 'currency', 
    currency 
  });
};
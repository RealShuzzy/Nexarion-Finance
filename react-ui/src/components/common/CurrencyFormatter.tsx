export const formatCurrency = (
  amount: number,
  currency: string = 'EUR', 
  locale: string = 'de-DE'
) => {
  return amount.toLocaleString(locale, { 
    style: 'currency', 
    currency 
  });
};
export const formatPrice = (price?: number) => {
  if (price === 0) return 'Free';
  if (price != null) return `$${price.toFixed(2)}`;
  return 'N/A';
};

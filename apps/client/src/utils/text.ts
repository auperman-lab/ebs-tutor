export const formatPrice = (price?: number) => {
  if (price === 0) return 'Free';
  if (price != null) return `$${price.toFixed(2)}`;
  return 'N/A';
};

export const formatOldPrice = (priceOld?: number, price?: number): string => {
  if (priceOld != null && priceOld !== price) {
    return `$${priceOld.toFixed(2)}`;
  }
  return '';
};

export const formatDiscount = (priceOld?: number, price?: number): string => {
  if (priceOld != null && price != null && priceOld !== price) {
    return `${((priceOld - price) * 100) / priceOld}%`;
  }
  return '';
};

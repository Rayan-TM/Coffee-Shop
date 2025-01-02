export function CalculateDiscountedPrice(price, rate) {
  const totalDiscount = price * (rate / 100);
  const discountedPrice = price - totalDiscount;

  return discountedPrice;
}

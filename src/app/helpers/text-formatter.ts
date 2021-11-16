export function formatDistance(distance: number) {
  return distance < 1000
    ? distance.toFixed(0) + 'm'
    : (distance / 1000).toFixed(2).replace('.', ',') + 'km';
}

export function formatRating(rating: number) {
  return rating.toFixed(1).replace('.', ',');
}

export function formatPrice(price: number) {
  return price.toFixed(2).replace('.', ',');
}

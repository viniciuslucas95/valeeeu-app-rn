export interface IOrderByDto {
  orderBy: 'distance' | 'rating' | 'price' | 'workersQuantity';
  descending?: boolean;
}

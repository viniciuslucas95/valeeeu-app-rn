interface IRating {
  average: number;
  total: number;
}

export interface ISearchResultItemDto {
  id: string;
  picture: string;
  name: string;
  username: string;
  description: string;
  lowestPrice: number;
  rating: IRating;
  distance: number;
}

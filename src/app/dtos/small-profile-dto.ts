interface IRating {
  average: number;
  total: number;
}

export interface ISmallProfileDto {
  id: string;
  picture: string;
  name: string;
  username: string;
  description: string;
  lowestPrice: number;
  rating: IRating;
  distance: number;
  isOnline?: boolean;
}

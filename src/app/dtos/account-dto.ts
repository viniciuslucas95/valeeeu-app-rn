import { IProfileDto } from './profile-dto';

export interface IAccountDto {
  id: string;
  email: string;
  phone: string;
  profile: IProfileDto;
}

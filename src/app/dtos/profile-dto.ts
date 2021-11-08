import { IPictureDto } from './picture-dto';
import { IWorkerProfileDto } from './worker-profile-dto';

export interface IProfileDto {
  id: string;
  username: string;
  name: string;
  picture: IPictureDto;
  workerProfile?: IWorkerProfileDto;
}

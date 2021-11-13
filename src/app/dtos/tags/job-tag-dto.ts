import { IServiceTagDto } from './service-tag-dto';

export interface IJobTagDto {
  jobTag: string;
  serviceTag?: IServiceTagDto;
}

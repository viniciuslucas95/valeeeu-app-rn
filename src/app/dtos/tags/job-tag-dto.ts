import { IServiceTagDto } from './service-tag-dto';

export interface IJobTagDto {
  job: string;
  service?: IServiceTagDto;
}

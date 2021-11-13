import { AreaTag } from '../../constants';
import { IJobTagDto } from './job-tag-dto';

export interface IAreaTagDto {
  areaTag: AreaTag;
  jobTag?: IJobTagDto;
}

import { AreaTag } from '../../constants';
import { IJobTagDto } from './job-tag-dto';

export interface IAreaTagDto {
  area: AreaTag;
  job?: IJobTagDto;
}

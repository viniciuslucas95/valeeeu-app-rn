import { IStyleable } from '../../data-types/props';
import { IPressable } from '../interfaces';
import { IToggleable } from './interfaces';

export type Toggleable = Partial<IToggleable> & IStyleable & IPressable;

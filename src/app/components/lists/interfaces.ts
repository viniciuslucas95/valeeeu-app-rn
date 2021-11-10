import React from 'react';
import { IStyleable } from '../../data-types/props';

export interface ITagList extends IStyleable {
  data: string[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

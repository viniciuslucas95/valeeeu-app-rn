import React from 'react';

export interface ITagList {
  data: string[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

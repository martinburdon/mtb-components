import React, { FC, useContext } from 'react';
import {
  CollapsibleContext,
  CollapsibleContextType
} from './contexts/CollapsibleContext';

export const CollapsibleHead: FC = ({ children }) => {
  const { toggleCollapsible } = useContext(
    CollapsibleContext
  ) as CollapsibleContextType;

  return (
    <div onClick={toggleCollapsible} className='collapsible-head'>
      {children}
    </div>
  );
};

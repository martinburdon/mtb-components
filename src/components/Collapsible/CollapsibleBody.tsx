import React, { FC, useContext } from 'react';
import {
  CollapsibleContext,
  CollapsibleContextType
} from './contexts/CollapsibleContext';

export const CollapsibleBody: FC = ({ children }) => {
  const { isOpen } = useContext(CollapsibleContext) as CollapsibleContextType;
  const className = ['collapsible-body'];
  if (isOpen) className.push('collapsible-body--is-open');
  return <div className={className.join(' ')}>{children}</div>;
};

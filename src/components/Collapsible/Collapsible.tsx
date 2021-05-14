import React, { FC } from 'react';
import CollapsibleProvider from './contexts/CollapsibleContext';
import { Container } from './styles';

export const Collapsible: FC = ({ children }) => {
  return (
    <CollapsibleProvider>
      <Container>{children}</Container>
    </CollapsibleProvider>
  );
};

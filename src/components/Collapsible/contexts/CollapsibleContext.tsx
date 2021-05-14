import React, { createContext, FC, useState } from 'react';

export type CollapsibleContextType = {
  isOpen: boolean;
  toggleCollapsible: () => void;
};

export const CollapsibleContext = createContext<
  Partial<CollapsibleContextType>
>({});

const CollapsibleProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleCollapsible = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <CollapsibleContext.Provider value={{ isOpen, toggleCollapsible }}>
      {children}
    </CollapsibleContext.Provider>
  );
};

export default CollapsibleProvider;

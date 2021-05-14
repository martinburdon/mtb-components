import React, { FC } from 'react';
export declare type CollapsibleContextType = {
    isOpen: boolean;
    toggleCollapsible: () => void;
};
export declare const CollapsibleContext: React.Context<Partial<CollapsibleContextType>>;
declare const CollapsibleProvider: FC;
export default CollapsibleProvider;

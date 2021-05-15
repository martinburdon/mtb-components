import { FC } from 'react';
export declare type ToggleSwitchType = {
    id: string;
    label: string;
    disabled?: boolean;
    checked?: boolean;
    onChange: () => void;
};
export declare const ToggleSwitch: FC<ToggleSwitchType>;

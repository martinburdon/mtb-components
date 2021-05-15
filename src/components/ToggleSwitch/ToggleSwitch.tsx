import React, { FC } from 'react';
import { Container } from './styles';

export type ToggleSwitchType = {
  id: string;
  label: string;
  disabled?: boolean;
  checked?: boolean;
  onChange: () => void;
};

export const ToggleSwitch: FC<ToggleSwitchType> = ({
  id,
  label,
  disabled,
  checked,
  onChange
}) => {
  return (
    // TODO: Pass `disabled` class to `Container`
    <Container>
      <input
        type='checkbox'
        id={id}
        name={id}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </Container>
  );
};

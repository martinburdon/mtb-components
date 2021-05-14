import styled from 'styled-components';

export const Container = styled.div`
  // Toggle colours
  --toggle-background: #ddd;
  --toggleButton-background: #fff;
  --toggle-background-checked: #2bb82b;

  // Label
  --toggleLabel-color: #333;
  --toggleLabel-fontSize: 16px;
  --toggleLabel-fontWeight: 400;
  --toggleLabel-paddingLeft: 10px;
  --toggleLabel-textTransform: none;

  // Disabled
  --toggleLabel-color-disabled: #ccc;
  --toggle-background-disabled: #ddd;
  --toggle-background-checkedDisabled: #ddd;

  // Dimensions and layout
  --toggleContainer-margin: 0;
  --toggle-height: 25px;
  --toggle-padding: 2px;
  --toggle-width: calc(
    (var(--toggle-height) * 2) - (var(--toggle-padding) * 2)
  );
  --toggleButton-height: calc(
    var(--toggle-height) - (var(--toggle-padding) * 2)
  );

  margin: var(--toggleContainer-margin);
  position: relative;

  label {
    align-items: center;
    color: var(--toggleLabel-color);
    cursor: pointer;
    display: flex;
    font-size: var(--toggleLabel-fontSize);
    font-weight: var(--toggleLabel-fontWeight);
    margin-left: var(--toggle-width);
    min-height: var(--toggle-height);
    padding-left: var(--toggleLabel-paddingLeft);
    text-transform: var(--toggleLabel-textTransform);
    user-select: none;

    &::before,
    &::after {
      border-radius: 5px;
      content: '';
      left: 0;
      position: absolute;
      top: 0;
    }

    // Toggle off
    &::before {
      background: var(--toggle-background);
      height: var(--toggle-height);
      width: var(--toggle-width);
    }

    &::after {
      background: var(--toggleButton-background);
      height: var(--toggleButton-height);
      left: 0;
      top: var(--toggle-padding);
      transform: translateX(var(--toggle-padding));
      transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      width: var(--toggleButton-height);
    }
  }

  // Toggle on
  input:checked + label {
    &::before {
      background: var(--toggle-background-checked);
    }

    // Move circle control to right when checked
    &::after {
      transform: translateX(calc(var(--toggle-width) / 2));
    }
  }

  // Disabled
  &.disabled {
    label {
      color: var(--toggleLabel-color-disabled);
      cursor: default;

      &::before {
        background: var(--toggle-background-disabled);
      }

      &:checked + label::before {
        background: var(--toggle-background-checkedDisabled);
      }
    }
  }

  // Accessibility
  input {
    height: var(--toggle-height);
    margin: 0;
    opacity: 0;
    padding: 0;
    position: absolute;
    width: var(--toggle-width);

    &:focus {
      + label::before {
        outline: 2px auto -webkit-focus-ring-color;
        outline-offset: 2px;
      }

      &:not(:focus-visible) + label::before {
        outline: none;
      }
    }
  }
`;

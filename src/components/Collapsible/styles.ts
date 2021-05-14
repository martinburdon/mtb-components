import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: var(--collapsible-margin);

  .collapsible-head {
    background: var(--collapsible-head-background, #ddd);
    color: var(--collapsible-head-color);
    cursor: pointer;
    font-weight: var(--collapsible-head-font-weight, 700);
    padding: var(--collapsible-head-padding, 20px);
    user-select: none;
  }

  .collapsible-body {
    background: var(--collapsible-body-background, #eee);
    color: var(--collapsible-body-color);
    display: none;
    padding: var(--collapsible-body-padding, 20px);

    &--is-open {
      display: block;
    }
  }
`;

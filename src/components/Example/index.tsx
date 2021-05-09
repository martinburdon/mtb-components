import React from 'react';
import { Container } from './styles';

interface ExampleProps {
  text: string;
}

const Example: React.FC<ExampleProps> = ({ text }) => {
  return (
    <Container>
      <p>Custom text:</p>
      <p>{text}</p>
    </Container>
  );
};

export { Example, ExampleProps };

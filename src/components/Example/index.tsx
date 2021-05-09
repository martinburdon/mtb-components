import React from 'react';

interface ExampleProps {
  text: string;
}

const Example: React.FC<ExampleProps> = ({ text }) => {
  return (
    <div>
      <p>Custom text:</p>
      <p>{text}</p>
    </div>
  );
};

export { Example, ExampleProps };

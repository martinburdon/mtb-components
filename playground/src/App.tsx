import { useState } from 'react';
import {
  Example,
  Collapsible,
  CollapsibleHead,
  CollapsibleBody,
  ToggleSwitch,
  CodeBlock
} from './component-lib';

function App() {
  const [toggleChecked, setToggleChecked] = useState(false);

  const cssCode = `
    .sticky-el {
      position: sticky;
      top: -1px;
    }

    .is-stuck {
      color: red;
    }
  `;

  const jsCode = `
    const el = document.querySelector('.sticky-el');
    const observer = new IntersectionObserver( 
      ([e]) => e.target.classList.toggle('is-stuck', e.intersectionRatio < 1),
      { threshold: [1] }
    );

    observer.observe(el);
  `;

  return (
    <div className='App'>
      <CodeBlock language='jsx'>{jsCode}</CodeBlock>
      <CodeBlock language='css'>{cssCode}</CodeBlock>
      <Example text='Hello custom text' />
      <ToggleSwitch
        label={`Toggle is ${toggleChecked ? 'checked' : 'not checked'}`}
        id='toggle'
        checked={toggleChecked}
        onChange={() => setToggleChecked((prevState) => !prevState)}
      />
      <Collapsible>
        <CollapsibleHead>Toggle me</CollapsibleHead>
        <CollapsibleBody>Some content</CollapsibleBody>
      </Collapsible>
    </div>
  );
}

export default App;

import { useState } from 'react';
import {
  Example,
  Collapsible,
  CollapsibleHead,
  CollapsibleBody,
  ToggleSwitch
} from './component-lib';

function App() {
  const [toggleChecked, setToggleChecked] = useState(false);

  return (
    <div className='App'>
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

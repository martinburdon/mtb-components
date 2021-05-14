import {
  Example,
  Collapsible,
  CollapsibleHead,
  CollapsibleBody
} from './component-lib';

function App() {
  return (
    <div className='App'>
      <Example text='Hello custom text' />
      <Collapsible>
        <CollapsibleHead>Toggle me</CollapsibleHead>
        <CollapsibleBody>Some content</CollapsibleBody>
      </Collapsible>
    </div>
  );
}

export default App;

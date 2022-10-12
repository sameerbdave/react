import './App.css';
import DataFetch from './component/DataFetch';
import DataFetchInput from './component/DataFetchInput';
import HookCount from './component/HookCount';
import Interval from './component/Interval';

function App() {
  return (
    <div className='App'>
      {/* <Interval /> */}
      <DataFetch />
      <HookCount/>
      {/* <DataFetchInput/> */}
    </div>

  );
}

export default App;

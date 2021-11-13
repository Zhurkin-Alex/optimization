import './App.css';
import Blocks from '../Block-rerender/Block-rerender'
import BlockThithoutRerender from '../Block-thithout-rerender/Block-thithout-rerender'

import BlockCountRerender from '../reactMemo/Block-Count-Rerender/Block-Count-Rerender'
import BlockCountThethuutRerender from '../reactMemo/Block-Count-Thithout-Rerender/BlockCountThethuutRerender'

import UseColback from '../UseColback/UseColback'
import UseColbackTrue from '../UseColback/useColbackTrue'

import UseMemos from '../useMemo/useMemo'

function App() {
  return (
    <div className="App">
     App
     <Blocks/>
     <BlockThithoutRerender/>
     <BlockCountRerender/>
     <BlockCountThethuutRerender/>
     <UseColback/>
     <UseColbackTrue/>
     <UseMemos/>
    </div>
  );
}

export default App;

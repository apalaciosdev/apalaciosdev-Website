import Header from './components/Header'
import {data} from './resumeData.js'

function App() {
  return (
    <div className="App">
      <Header data={data.main}/>
    </div>
  );
}

export default App;

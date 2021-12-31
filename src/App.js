import About from './components/About';
import Header from './components/Header'
import Navbar from './components/Navbar';
import {data} from './resumeData.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header data={data.main}/>
      <About/>
      <p></p>
    </div>
  );
}

export default App;

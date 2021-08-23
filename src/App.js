import './App.css';
import Data from './components/Data/Data';
import Error from './components/Error/Error';
import Loading from './components/Loading/Loading';

function App() {

  return (
    <div className="App">
      <Data />
      <Error />
      <Loading />
    </div>
  );
}

export default App;
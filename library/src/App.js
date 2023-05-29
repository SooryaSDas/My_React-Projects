import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import stores from "./utils/stores";


function App() {
  return (
    <Provider store={stores}>
    <div className="App">
        <Header/>
        <Body/>
    </div>
    </Provider>
  );
}

export default App;

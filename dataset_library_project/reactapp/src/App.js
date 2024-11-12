import logo from './logo.svg';
import './App.css';
import Dashboard from "./components/Home/Dashboard.js"
import { Provider } from 'react-redux';
import store from "./store/index.js"

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <Dashboard></Dashboard>
      </header>
    </div>
    </Provider>
  );
}

export default App;

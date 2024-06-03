import logo from './logo.svg';
import './App.css';
import AppIndex from './components/index.jsx';
import AppHeader from './components/header.jsx';
import AppFooter from './components/footer.jsx';


function App() {
  return (
    <div className="App">
      <>
        <AppHeader />
        <AppIndex />
        <AppFooter />
      </>
    </div>
  );
}

export default App;

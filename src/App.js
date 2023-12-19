import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CostumNavbar';
import CostumFooter from './components/CostumFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomNavbar />
        <div className='w-100'>
          <Welcome />
        </div>
      </header>
      <AllTheBooks />
      <CostumFooter />
    </div>
    
  );
}

export default App;

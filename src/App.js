import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import books from './data/books.json'
import CustomNavbar from './components/CostumNavbar';
import CostumFooter from './components/CostumFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import BookList from './components/BookList';

function App() {
  const libri = books.horror  
  return (
    <div className="App">
      <header className="App-header">
        <CustomNavbar />
        <div className='w-100'>
          <Welcome />
        </div>
      </header>
      <BookList books = {libri}/>
      {/* <AllTheBooks /> */}
      <CostumFooter />
    </div>

  );
}

export default App;

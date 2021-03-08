import './App.css';
import "./components/photos_list/photos_list"
import PhotosList from './components/photos_list/photos_list';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <div className="headerAppDiv">
      <Header />
      </div>
      <div className="photoListBody">
      <PhotosList />
      </div>

    </div>
  );
}

export default App;

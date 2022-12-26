import logo from './logo.svg';
import './App.css';

//importamos los componentes
import CompShowPosts from './posts/showPosts';
import CompCreatePosts from './posts/createPosts';
import CompEditPosts from './posts/editPosts';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <CompShowPosts />} />
            <Route path='/create' element={ <CompCreatePosts />} />
            <Route path='/edit/:id' element={ <CompEditPosts />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
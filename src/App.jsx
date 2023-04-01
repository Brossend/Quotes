import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './components/MainPage';
import MainLayout from './components/layouts/MainLayout';
import QuoteByCategory from './components/QuoteByCategory';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/quotes/" element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path="/quotes/:category" element={<QuoteByCategory />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

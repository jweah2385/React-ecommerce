
import { Outlet } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import './App.css';

function App() {
  return (
    <div>

      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

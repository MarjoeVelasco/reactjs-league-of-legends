import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import RouterProvider from './components/RouterProvider';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Header />
        <ScrollToTop />
        <RouterProvider />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

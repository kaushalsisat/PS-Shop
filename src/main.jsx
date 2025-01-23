 
import { createRoot } from 'react-dom/client'
import './index.css'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import { ToastContainer } from 'react-toastify';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './store/StoreContext.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';


createRoot(document.getElementById('root')).render(
  <>
    <CartProvider>
      <BrowserRouter basename='PS-Shop'>
        <App />
         <ToastContainer/>
      </BrowserRouter>
    </CartProvider>
    </>
);

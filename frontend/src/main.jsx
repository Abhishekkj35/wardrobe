import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
import { store } from './store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
    <Provider store={store}>
      <ShopContextProvider>
         <App />
      </ShopContextProvider>
      </Provider>
   </BrowserRouter>

)
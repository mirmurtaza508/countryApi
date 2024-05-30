import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home'
import App from './App'
import CountryDetail from './Components/CountryDetail';
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },{
            path: ':country',
            element: <CountryDetail/>
        }
      ]
    },
  ]);
const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
    <RouterProvider router={router} />
)
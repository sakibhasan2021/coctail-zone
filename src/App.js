
// import './App.css';
// import Header from './components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Main from './LayOut/Main';
import Order from './components/Order/Order';
import Contact from './components/Contact/Contact';
import Login from './components/LogIn/Login';
import Details from './components/Details/Details';

function App() {
  const router =createBrowserRouter([
    {
      path:'/',element:<Main></Main>,children:[
        {path:'/Menu',
        loader:()=>{
          return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
        },
        element:<Menu></Menu>},
        {path:'/Order',element:<Order></Order>},
        {path:'/contact',element:<Contact></Contact>},
        {path:'/Details/:idDrink',loader:async({params})=>{
          // console.log(params);
          return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.idDrink}`)
        },
        element:<Details></Details>},

        {path:'/signin',element:<Login></Login>}

      ]
    }
  ])
  // www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

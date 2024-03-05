import './App.css';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Product from './components/Product';
import { 
  Link , 
  createBrowserRouter, 
  RouterProvider,
  Outlet
} from 'react-router-dom';

const Root = () =>{
  return(
    <>
    <div>
      <Link to='/'>Home</Link>
      <Link to="/about">About</Link>
      <Link to='/shop'>Shop</Link>
      <Link to="/411">Error</Link>
    </div>
    <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement: <h2>404 Not Found</h2>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/about',
        element: <About/>
      }
      ,
      {
        path:'/shop',
        element: <Shop/>
      },
      {
        path:'/product/:productId',
        element: <Product/>
      }
    ]
  }
])
function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;

/**
 *     <div>
      <nav>
        <Link to="/">Home</Link> <br />
        <Link to="/about">About</Link><br />
        <Link to="/shop">Shop</Link>
      </nav>
    </div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/shop' element={<Shop />} />
      <Route path="/product/:id" element={<Product/>}/>     
      <Route path='*' element={<h2>404 Not Found</h2>} />
    </Routes>
 * 
 */
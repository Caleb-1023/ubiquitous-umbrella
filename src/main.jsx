import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import Login from './components/accounts/login.component.jsx'
import Signup from './components/accounts/signup.component.jsx'
// import Accounts from './components/accounts/index.jsx'
import Home from './components/home/index.jsx'
import Listings from './components/listings/listings.component.jsx'
import Product from './components/listings/product.component.jsx'
import Categories from './components/listings/categories.component.jsx'
import Admin from './components/accounts/admin.component.jsx'
import { AuthProvider } from './context/AuthProvider.jsx'
import Pages from './components/index.jsx'
import Account from './components/accounts/account.jsx'
import Wishlist from './components/accounts/wishlist.component.jsx'
import Halls from './components/listings/halls.component.jsx'
import AddProduct from './components/listings/addproduct.component.jsx'
import AllStudents from './components/accounts/all-students.component.jsx'
import AllProducts from './components/accounts/all-products.component.jsx'
import HallListings from './components/listings/halls-listings.component.jsx'
import CategoryListings from './components/listings/category-listings.component.jsx'
import SearchListings from './components/listings/search-listings.component.jsx'
import Faqs from './components/footer/faqs.component.jsx'
import About from './components/navbar/about.component.jsx'

const router = createBrowserRouter(
  // {
  //   path: '/',
  //   element: <App />,
  //   children: [
  //     {
  //       path: '/',
  //       element: <Home />
  //     },
  //     {
  //       path: '/accounts',
  //       element: <Accounts />,
  //       children: [
  //         {
  //           path: 'accounts/login',
  //           element: <Login />
  //         },
  //         {
  //           path: 'accounts/signup',
  //           element: <Signup />
  //         }
  //       ]
  //     },
  //   ]
  // },
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='accounts'>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='admin' element={<Admin />} />
      </Route>
      <Route path='/' element={<Pages />}>
      <Route index element={<Home />} />
      <Route path='search/:query' element={<SearchListings />} />
      <Route path='products'>
        <Route index element={<Listings />} />
        <Route path=':productSlug' element={<Product />} />
        <Route path='add-product' element={<AddProduct />} />
        <Route path='edit-product/:productSlug' element={<AddProduct />} />
        <Route path='categories'>
          <Route index element={<Categories />} />
          <Route path=':category' element={<CategoryListings />} />
        </Route>
        <Route path='halls'>
          <Route index element={<Halls />} />
          <Route path=':hall' element={<HallListings />} />
        </Route>
      </Route>
      <Route path='account' element={<Account />} />
      <Route path='wishlist' element={<Wishlist />} />
      <Route path='all-students' element={<AllStudents />} />
      <Route path='all-products' element={<AllProducts />} />
      <Route path='faqs' element={<Faqs />} />
      <Route path='about' element={<About />} />
      <Route path='admin'>
        <Route index element />
      </Route>
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

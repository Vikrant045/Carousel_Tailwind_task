import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './component/Home'
import Login from './component/login/Login.jsx'
import Dashboard from './component/dashboard/Dashboard.jsx'
import SignUp from './component/signUp/SignUp.jsx'
import EditUser from './component/dashboard/EditUser.jsx'
import { store } from './redux-toolkit/store.js'
import {Provider} from   'react-redux'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
        <Route path="/" element={<App/>}>
          <Route path='' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signUp' element={<SignUp/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='dashboard/editUser/:id' element={<EditUser/>}/>
        </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(

  
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)

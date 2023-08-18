import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './pages/error-page'
import Home from './pages/home'
import Root from './pages/root'
import Glyphs from './pages/glyphs'
import GlyphPage from './pages/word-details-page'
import Editor from './pages/editor'
import Words from './pages/words'
import Tags from './pages/tags'
import Learn from './pages/learn'
import './index.css'
import reportWebVitals from './reportWebVitals'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/editor',
        element: <Editor />,
      },
      {
        path: '/glyphs',
        element: <Glyphs />,
      },
      {
        path: '/words/:letters',
        element: <GlyphPage />,
      },
      {
        path: '/words',
        element: <Words />,
      },
      {
        path: '/tags',
        element: <Tags />,
      },
      {
        path: '/learn',
        element: <Learn />,
      },
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

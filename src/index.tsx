import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '~/views/Home'

import './css/styles.scss'

const router = createBrowserRouter([
  {
    element: <Home />,
    path: '/',
  },
])

const container = document.getElementById('root')

// eslint-disable-next-line
const root = createRoot(container!)

root.render(<RouterProvider router={router} />)

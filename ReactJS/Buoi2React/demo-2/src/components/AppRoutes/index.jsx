import { createBrowserRouter, RouterProvider } from 'react-router'
import DefaultLayout from '../../layouts/DefaultLayout'
import Home from '../../pages/Home'
import Contact from '../../pages/Contact'
import News from '../../pages/News'
import PostDetail from '../../pages/PostDetail'
import NotFoundPage from '../../pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'contact', element: <Contact /> },
      { path: 'news', element: <News /> },
      { path: 'news/:id', element: <PostDetail /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default function AppRoutes() {
  return <RouterProvider router={router} />
}

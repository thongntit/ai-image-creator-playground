import { createBrowserRouter } from 'react-router-dom'
import AboutPage from './pages/about'
import HomePage from './pages/home'
import ImprintPage from './pages/imprint'
import ErrorPage from './components/error-page'

export function createRouter(): ReturnType<typeof createBrowserRouter> {
  return createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      ErrorBoundary: ErrorPage,
    },
    {
      path: 'about',
      element: <AboutPage />,
      ErrorBoundary: ErrorPage,
    },
    {
      path: 'imprint',
      element: <ImprintPage />,
      ErrorBoundary: ErrorPage,
    },
  ])
}

import { lazy } from 'react'
import { Route, Navigate, Routes, useLocation } from 'react-router-dom'
import { checkPathMatch, paths } from './helpers'

const HomePage = lazy(() => import('pages/homePage'))
const ProductDetailsPage = lazy(() => import('pages/productDetailsPage'))

const PublickRoutes: React.FC = () => {
  const location = useLocation()
  const isMatch = checkPathMatch(location.pathname, paths)

  return (
    <Routes>
      <Route path={paths.home} element={<HomePage />} />
      <Route path={paths.productDetails} element={<ProductDetailsPage />} />
      <Route
        path="*"
        element={!isMatch ? <Navigate to={paths.home} /> : null}
      />
    </Routes>
  )
}

export default PublickRoutes

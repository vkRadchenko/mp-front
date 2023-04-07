import { AppStyles, Footer } from 'app.styled'
import Header from 'features/header'
import PrivateRoutes from 'routes/privateRoutes'
import PublickRoutes from 'routes/publickRoutes'

const App = () => {
  return (
    <>
      <AppStyles />
      <Header />
      <PublickRoutes />
      {/*  <PrivateRoutes /> */}

      <Footer>
        <div>© Маркетплейс MW</div>
      </Footer>
    </>
  )
}

export default App

import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import { RequiredAuth } from '@app/hoc'
import { LoginView } from '@/views'
import { Layout, routes } from '@app/router/Layout'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='login' element={<LoginView />} />
    <Route path='/' element={
      <RequiredAuth>
        <Layout />
      </RequiredAuth>
    }>
      {routes
        .filter(({element}) => element)
        .map(({index, path, element}, i) => {
          return index
          ? <Route key={i} index={index} element={element} />
          : <Route key={i} path={path} element={element} />
        })
      }
    </Route>
  </>
), {basename: '/sirius-future-test-task'})

export { router, routes }
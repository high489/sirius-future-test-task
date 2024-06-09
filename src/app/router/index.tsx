import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
} from 'react-router-dom'
import { Layout } from '@/components'
import { Login, Home, NotFound, Schedule } from '@/views'
import { RequiredAuth } from '@app/hoc'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='login' element={<Login />} /><Route path='/' element={
      <RequiredAuth>
        <Layout />
      </RequiredAuth>
    }>
      <Route index element={<Home />} />
      <Route path='schedule' element={<Schedule />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  </>
), {basename: "/sirius-future-test-task"})

export { router }
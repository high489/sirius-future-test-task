import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
} from 'react-router-dom'
import { MainLayout } from '@app/router/MainLayout'
import { LoginView, HomeView, NotFoundView, ScheduleView } from '@/views'
import { RequiredAuth } from '@app/hoc'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='login' element={<LoginView />} />
    <Route path='/' element={
      <RequiredAuth>
        <MainLayout />
      </RequiredAuth>
    }>
      <Route index element={<HomeView />} />
      <Route path='schedule' element={<ScheduleView />} />
      <Route path='*' element={<NotFoundView />} />
    </Route>
  </>
), {basename: "/sirius-future-test-task"})

export { router }
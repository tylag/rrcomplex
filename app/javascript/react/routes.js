import React from 'react'
import { Suspense, lazy } from 'react'
import { Navigate, useRoutes, useLocation } from 'react-router-dom'

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<div>...Loading</div>}>
      <Component {...props} />
    </Suspense>
  )
}

export default function Router(){
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <Login />
          ),
        },
        {
          path: 'register',
          element: (
            <Register />
          ),
        },
        { path: 'login-unprotected', element: <Login /> },
        { path: 'register-unprotected', element: <Register /> },
        // { path: 'reset-password', element: <ResetPassword /> },
        // { path: 'verify', element: <VerifyCode /> },
      ],
    },
    // {
    //   path: '*',
    //   element: <LogoOnlyLayout />,
    //   children: [
    //     { path: 'coming-soon', element: <ComingSoon /> },
    //     { path: 'maintenance', element: <Maintenance /> },
    //     { path: 'pricing', element: <Pricing /> },
    //     { path: 'payment', element: <Payment /> },
    //     { path: '500', element: <Page500 /> },
    //     { path: '404', element: <NotFound /> },
    //     { path: '*', element: <Navigate to="/404" replace /> },
    //   ],
    // },
    // {
    //   path: '/',
    //   element: <MainLayout />,
    //   children: [
    //     { element: <HomePage />, index: true },
    //     { path: 'about-us', element: <About /> },
    //     { path: 'contact-us', element: <Contact /> },
    //     { path: 'faqs', element: <Faqs /> },
    //   ],
    // },
    { path: '*', element: <Navigate to="/auth/login" replace /> }
  ])
}

const Login = Loadable(lazy(() => import('./pages/auth/Login')))
const Register = Loadable(lazy(() => import('./pages/auth/Register')))
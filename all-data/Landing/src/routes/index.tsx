import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './allRoutes'
import Layout from '../layout/Index'

const Routing = () => {
  return (
    <React.Fragment>
        <Routes>
          {routes.map((route: any, idx: any) => (
            <Route path={route.path} element={
              <Layout>
                {route.component}
              </Layout>
            } key={idx} />
          ))}
        </Routes>
    </React.Fragment>
  )
}

export default Routing
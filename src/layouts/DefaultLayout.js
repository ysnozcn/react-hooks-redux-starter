import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import routes from '../routes';


const DefaultFooter = React.lazy(() => import('./LayoutComponets/DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./LayoutComponets/DefaultHeader'));


const loading = (
  <div className="pt-3 text-center">
    loading
  </div>
)

export const DefaultLayout = (props) => {
  return (
    <div>
      <Suspense fallback={loading}>
        <DefaultHeader />
      </Suspense>
      <div className="main">
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component {...props} />
                  )} />
              )
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </div>
      <Suspense fallback={loading}>
        <DefaultFooter />
      </Suspense>
    </div>
  )
}

export default DefaultLayout;

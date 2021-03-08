import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

const loading = () => <div className="loading d-flex">Loading...</div>;


// Containers
const DefaultLayout = React.lazy(() => import('./layouts/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./pages/login'));
const Page404 = React.lazy(() => import('./pages/page404'));
const Page500 = React.lazy(() => import('./pages/page500'));


function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
          <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
          <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
          <Route path="/" name="Home" render={props => <DefaultLayout {...props} />} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;

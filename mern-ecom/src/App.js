import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incremented, decremented } from './redux/slides/counterSlice';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './routes/routes';
import { DefaultLayout } from './components/DefaultLayout/DefaultLayout';

function App() {
  
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          const Page = route.page;
          const Layout = route.showNav? DefaultLayout: Fragment;
          return <Route key={route.path} path={route.path} element={
            <Layout>
              <Page />
            </Layout>
          } />;
        })}
      </Routes>
    </Router>
  );
}

export default App;

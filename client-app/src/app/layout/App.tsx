import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';


function App() {

 const location = useLocation();

  return (
    <>
    {location.pathname === '/' ? <HomePage/> :(
      <>
         <NavBar/>
         <Container style={{marginTop: '7em'}}>
         <Outlet />
         </Container>
      </>
    )}     
    </>
  );
}

export default observer (App);

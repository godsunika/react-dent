// import logo from '~/assets/images/logo.svg'
import '~/App.css';
import React from 'react'
import { Box, Container } from '@mui/material';

import apiClient from "~/http-common";
import AppBarComponent from '~/appbar.component';
import ReservationComponent from './reservation.component';
import ReservationListComponent from './reservationList.component';

function App() {

  return (
    <div className="App">
      <AppBarComponent 
        menus={['Products', 'Pricing', 'Blog']}
      />
      <Container  maxWidth="lg">
        <Box
          mt = {-25}
          sx = {{
            position               : "relative",
            zIndex                 : 2,
            borderBottomRightRadius: {
              xs: 80,
              sm: 100,
              md: 200
            },
            borderBottomLeftRadius : {
              xs: 80,
              sm: 100,
              md: 200
            },
            bgcolor                : '#E072A4',
            height                 : '100vh',
          }} />
      </Container>
      <Container  maxWidth="lg">
        <Box
          mt         = {-25}
          pt         = {5}
          px         = {10}
          alignItems = "center"
          sx         = {{
            display                : 'flex',
            flexDirection          : 'column',
            justifyContent         : 'center',
            position               : 'relative',
            zIndex                 : 1,
            borderBottomRightRadius: {
              xs: 80,
              sm: 100,
              md: 200
            },
            borderBottomLeftRadius : {
              xs: 80,
              sm: 100,
              md: 200
            },
            // opacity                : '50%',
            bgcolor                : '#FABC2A',
            width                  : 'auto',
            height                 : '100vh',
          }}>
            <ReservationComponent />
          </Box>
      </Container>
      <Container  maxWidth="lg">
        <ReservationListComponent api={apiClient}/>
      </Container>
      <Container  maxWidth="lg">
        <Box 
          mt         = {-25}
          py         = {5}
          px         = {10}
          alignItems = "center"
          sx         = {{
            display             : 'flex',
            flexDirection       : 'column',
            justifyContent      : 'center',
            position            : 'relative',
            zIndex              : 1,
            bgcolor             : '#D15523',
            width               : 'auto',
            height              : '100vh',
            borderTopRightRadius: {
              xs: 80,
              sm: 100,
              md: 200
            },
            borderTopLeftRadius : {
              xs: 80,
              sm: 100,
              md: 200
            },
            // opacity                : '50%',
          }}
        >
          
        </Box>
      </Container>
    </div>
  );
}

export default App;

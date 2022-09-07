// import logo from '/logo.svg';
import logo from '~/assets/images/od-inner.jpeg'
import { Box, Container, Button, Grid, Divider, Typography, Card, CardContent, CardMedia } from '@mui/material';
import '~/App.css';

import AppBarComponent from '~/appbar.component';
import ReservationFormSection from './ReservationForm.section';
import ReservationListSection from './ReservationList.section';

import apiClient from "~/http-common";
import HeaderTextComponent from './components/HeaderText.component';
import { borderRadius } from '@mui/system';
function App() {
  let services = ["Penambalan Gigi", "Pembersihan Karang Gigi", "Pencabutan Gigi", "Pencabutan Gigi Bungsu", "Pembuatan Gigi Tiruan", "Topikal Aplikasi Fluoride", "Bleaching"];

  return (
    <div className="App">
      <AppBarComponent 
        menus={['Products', 'Pricing', 'Blog']}
      />
      <Container maxWidth="xl">
        <Box
          mt = {-25}
          pt = {30}
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
            minHeight              : '100vh',
          }}
        >
          <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
            <Grid item xs={12} md={4}>
              <HeaderTextComponent 
                color="#59114D"
                textNumber={"100"}
                textTitle={"Madjidah"}
                textDesc={"somewhere"}
              />
            </Grid>
            <Grid item xs={12} md={4} display="flex">
              <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
              <HeaderTextComponent 
                color="#59114D"
                textNumber={"100"}
                textTitle={"Madjidah"}
                textDesc={"somewhere"}
              />
            </Grid>
            <Grid item xs={12} md={4} display="flex">
              <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
              <HeaderTextComponent 
                color="#59114D"
                textNumber={"100"}
                textTitle={"Madjidah"}
                textDesc={"somewhere"}
              />
            </Grid>
          </Grid>
          <Grid container 
          xs             = {12}
          sm             = {12}
          direction      = "row"
          justifyContent = "center"
          alignItems     = "center"
          wrap           = "wrap"
          columnSpacing  = {0}
          // columns={2}
            // maxWidth   = {"xl"}
            // minWidth   = {"xs"}
            p          = {10}
            sx         = {{
              display       : 'flex',
              flexFlow      : 'row wrap',
              justifyContent: 'space-evenly',
            }}
          >
            <Grid item xs={12} sm={6} key={1}>
              <Container
                maxWidth   = {"sm"}
                minWidth   = {"xs"}
                sx = {{
                  mx : 0,
                  px : 0
                }}
              >
                <Box
                  // component    = "img"
                  // src          = {logo}
                  p            = {1.2}
                  bgcolor      = {"#FFFFFF"}
                  mx = {0}
                  // borderRadius = {5}
                  // minWidth = {"100"}
                // idth = "xs"
                  sx        = {{
                    borderRadius: {
                      xs: 1,
                      sm: 1,
                      md: 2
                    },
                  }}
                >
                  <img src={logo} width="100%" height="auto"/>
                </Box>
              </Container>
            </Grid>
            <Grid item xs={12} sm={6} key={2}> 
              <Typography m={2}>Aku</Typography>
            </Grid>
          </Grid>
          <Box
            // alignItems = "left"
            maxWidth = "xl"
            // flexWrap = "wrap"
            alignItems = "center"
            sx={{
              // flex          : 4,
              display       : 'flex',
              flexFlow      : 'row wrap',
              justifyContent: 'space-evenly',
            }}
          >
            {services.map(name => (
              <Card sx={{
                m           : 2,
                borderRadius: 5,
                minWidth    : 350,
                display     : "flex",
                // borderRadius: 120
              }}
              style={{
                backgroundImage: `linear-gradient(to left,transparent,25%,white), url(${logo})`,
                backgroundSize: '100% 100%'

              }}
              >
                <CardContent>
                  {/* <Typography textAlign="left" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                  </Typography> */}
                  <Typography textAlign="left" variant="h5" component="div">
                  {name}
                  </Typography>
                  <Typography textAlign="left" sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                  </Typography>
                  <Typography textAlign="left" variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                {/* <CardMedia
                  component = "img"
                  sx        = {{ 
                    width: 151 
                  }}
                  image     = {logo}
                  alt       = "Live from space album cover"
                />
                <Typography variant='h5' style={{
                  position       : "absolute",
                  right          : "10px",
                  width          : "100%",
                  // textAlign      : "center",
                  color          : "black",
                  backgroundColor: "none"
                }} >Your text</Typography> */}
              </Card>
            ))}
            
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
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
            bgcolor                : '#FABC2A',
            width                  : 'auto',
            height                 : '100vh',
            zIndex                 : 1,
            borderBottomRightRadius: {
              xs: 80,
              sm: 100,
              md: 200
            },
            borderBottomLeftRadius: {
              xs: 80,
              sm: 100,
              md: 200
            },
            // opacity                : '50%',
          }}>
            <ReservationFormSection />
          </Box>
      </Container>
      <Container maxWidth="xl">
        <Box 
          mt         = {-25}
          py         = {25}
          alignItems = "center"
          sx         = {{
            display       : 'flex',
            flexDirection : 'column',
            justifyContent: 'center',
            position      : 'relative',
            zIndex        : 0,
            bgcolor       : '#05A8AA',
            width         : 'auto',
            height        : '100vh',
            px            : {
              xs: 1,
              sm: 3,
              md: 10
            },
        }}>
          <ReservationListSection api={apiClient}/>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: 'red', height: '100vh' }} />
      </Container>

    </div>
  );
}

export default App;

// import logo from '~/assets/images/logo.svg'
import '~/App.css';
import { useQuery } from 'react-query'
import React, { useState, useEffect } from 'react'
import { Box, Container, Button, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import apiClient from "~/http-common";
import AppBarComponent from '~/appbar.component';
import ReservationComponent from './reservation.component';
import { type } from '@testing-library/user-event/dist/type';

function App() {
  // const { isLoading, isSuccess, isError, data, error, refetch } = useQuery('query-tutorials', fetchTutorials, { enabled: false, retry: 2, onSuccess, onError });

  // const [getId, setGetId]         = useState("");
  // const [getTitle, setGetTitle]   = useState("");
  const [getResult, setGetResult] = useState(null);
  const fortmatResponse           = (res) => {
    return JSON.stringify(res, null, 2);
  };
  const { status, data: books, error, refetch: getAllBooks } = useQuery(
    "query-books",
    async () => {
      return await apiClient.get("/books");
    },
    // {
      // enabled: false,
      // onSuccess: (res) => {
      //   const result = {
      //     status : res.status + "-" + res.statusText,
      //     headers: res.headers,
      //     data   : res.data,
      //   };
      //   // console.log(JSON.parse(result.data));
      //   setGetResult(fortmatResponse(result.data));
      //   console.log(typeof(getResult))
      //   console.log(getResult)
      // },
      // onError: (err) => {
      //   setGetResult(fortmatResponse(err.response?.data || err));
      // },
    // }
  );
  
  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <span>Error: {error.message}</span>;

  // useEffect(() => {
  //   if (isLoading) setGetResult("loading...");
  // }, [isLoading]);

  function getAllData() {
    try {
      getAllBooks();
    } catch (err) {
      setGetResult(fortmatResponse(err));
    }
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'title', headerName: 'Title', width: 225, sortable: true },
    { field: 'author', headerName: 'Author', width: 225, sortable: true },
    { field: 'category', headerName: 'Category', width: 150, sortable: true },
    { field: 'price', headerName: 'Price', width: 150, sortable: true },
    { field: 'stock', headerName: 'Stock', width: 150, sortable: true },
    // { field: 'fullName', headerName: 'Full name', description: 'This column has a value getter and is not sortable.', sortable: false, width: 160, valueGetter: (params) =>   `${params.row.firstName || ''} ${params.row.lastName || ''}`, },
  ];

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
            px         : {
              xs: 1,
              sm: 3,
              md: 10
            },
            // borderTopRightRadius  : {
            //   xs: 80,
            //   sm: 100,
            //   md: 200
            // },
            // borderTopLeftRadius  : {
            //   xs: 80,
            //   sm: 100,
            //   md: 200
            // },
            // borderBottomRightRadius  : {
            //   xs: 80,
            //   sm: 100,
            //   md: 200
            // },
            // borderBottomLeftRadius  : {
            //   xs: 80,
            //   sm: 100,
            //   md: 200
            // },
            // opacity                : '50%',
            bgcolor                : '#05A8AA',
            width                  : 'auto',
            height                 : '100vh',
          }}>
            <Container style={{padding: 0}}>
              <Box mt={1}>
                <Button size="large" sx={{bgcolor: "#D15523"}} variant="contained" fullWidth  onClick={getAllData}>Get Data</Button>
              </Box>
              {/* {(getResult && getResult != "loading...") ? */}
              <Box 
                alignItems = "center"
                sx         = {{
                  justifyContent: 'center',
                  bgcolor       : 'white',
                  // p             : 1,
                  height        : 400,
                  // width         : 'auto',
                  borderTopRightRadius: {
                    xs: 8,
                    sm: 10,
                    md: 20
                  },
                  borderTopLeftRadius: {
                    xs: 8,
                    sm: 10,
                    md: 20
                  },
                  borderBottomRightRadius: {
                    xs: 8,
                    sm: 10,
                    md: 20
                  },
                  borderBottomLeftRadius: {
                    xs: 8,
                    sm: 10,
                    md: 20
                  },
                }}
              >
                <DataGrid
                // style={{width: "90%"}}
                  // getRowId={row => row.yourUniqueField}
                  // pageSize           = {5}
                  // rowsPerPageOptions = {[5]}
                  // width = "100%"
                  pagination
                  disableColumnMenu
                  disableSelectionOnClick
                  // loading  = {true}
                  getRowId = {row => row.id}
                  rows     = {books.data}
                  columns  = {columns}
                />
              </Box> 
              {/* : getResult } */}
            </Container>
          </Box>
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

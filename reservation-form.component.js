import React from 'react'
import { Controller } from "react-hook-form";
import { Grid, TextField } from '@mui/material'


const ReservationFormComponent = ({ control }) => {
  
  return (
    <>
      <Grid
        container
        alignItems     = "center"
        justifyContent = "center"
        
        // spacing        = {0.5}
      >
        <Grid item 
          ml    = {-1}
          style = {{paddingLeft:0}}
          xs    = {12} sm = {12} md = {12} lg = {12} xl = {12}
        >
          <Controller
            render  = {({ field }) => <TextField fullWidth {...field} sx={{m: 0.5}} id = "form-title" label = "Title" variant = "outlined" /> }
            name    = "formTitle"
            control = {control}
          />
        </Grid>
        <Grid item 
          ml    = {-1}
          style = {{paddingLeft:0}}
          xs    = {12} sm = {12} md = {12} lg = {12} xl = {12}>
          <Controller
            render  = {({ field }) => <TextField fullWidth {...field} sx={{m: 0.5}} id = "form-author" label = "Author" variant = "outlined" /> }
            name    = "formAuthor"
            control = {control}
          />
        </Grid>
      
        <Grid item 
          ml    = {-1}
          style = {{paddingLeft:0}}
          xs    = {12} sm = {12} md = {12} lg = {12} xl = {12}
        >
            <Controller
              render  = {({ field }) => <TextField fullWidth {...field} sx={{m: 0.5}} id = "form-category" label = "Category" variant = "outlined" /> }
              name    = "formCategory"
              control = {control}
            />
        </Grid>
      
        <Grid item 
          ml    = {-1}
          style = {{paddingLeft:0}}
          xs    = {12} sm = {12} md = {12} lg = {12} xl = {12}
        >
          <Controller
            render  = {({ field }) => <TextField fullWidth {...field} sx={{m: 0.5}} id = "form-price" label = "Price" variant = "outlined" /> }
            name    = "formPrice"
            control = {control}
          />
        </Grid>
      
        <Grid item 
          ml    = {-1}
          style = {{paddingLeft:0}}
          xs    = {12} sm = {12} md = {12} lg = {12} xl = {12}
        >
          <Controller
            render  = {({ field }) => <TextField fullWidth {...field} sx={{m: 0.5}} id = "form-stock" label = "Stock" variant = "outlined" /> }
            name    = "formStock"
            control = {control}
          />
        </Grid>
      </Grid>
    </>
  )
} 

export default ReservationFormComponent;
import React, { useState, useEffect, useCallback } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import useAuth from '../../hooks/useAuth';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {

  const [ data, setData ] = useState({firstname: '', lastname: '', username: '', email: '', password: ''})
  const { register } = useAuth()

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(validate(1) && validate(2) && validate(3) && validate(4) && validate(5)){
      try{
        let status = await register(data)
        console.log(status, 'dddd')
      }catch(e){
        console.log(e, 'error')
      }
    }else{

    }
  }

  const validate = (idx) => {
    switch (idx){
      case 1: // FIRSTNAME
        return data.firstname.length != 0
      case 2: // LASTNAME 
        return data.lastname.length != 0
      case 3: // USERNAME 
        return data.username.length != 0
      case 4: // EMAIL 
        return data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      case 5: // PASSWORD 
        return data.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
      default:
        return
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={data.firstname}
                  onChange={(val) => {setData({...data, firstname: val.target.value})}}
                  color={validate(1) ? 'primary' : 'error'}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={data.lastname}
                  onChange={(val) => {setData({...data, lastname: val.target.value})}}
                  color={validate(2) ? 'primary' : 'error'}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="User name"
                  name="username"
                  autoComplete="username"
                  value={data.username}
                  onChange={(val) => {setData({...data, username: val.target.value})}}
                  color={validate(3) ? 'primary' : 'error'}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={data.email}
                  onChange={(val) => {setData({...data, email: val.target.value})}}
                  color={validate(4) ? 'primary' : 'error'}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={data.password}
                  onChange={(val) => {setData({...data, password: val.target.value})}}
                  color={validate(5) ? 'primary' : 'error'}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              disabled={!(validate(1) && validate(2) && validate(3) && validate(4) && validate(5))}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/auth/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
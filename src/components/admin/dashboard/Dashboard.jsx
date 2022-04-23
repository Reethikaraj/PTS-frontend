import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import Navbar from './navbar/Navbar'

const Dashboard = () => {
  return (
    <Container
      sx={{
        height: '120%',
        position: 'relative',
        top: '9.5vh',
        paddingBottom: '50px',
      }}
    >
      <Typography variant='h6' sx={{ textAlign: 'center', padding: '3px 0' }}>
        Admin's dashboard
      </Typography>
      <Navbar />
    </Container>
  )
}

export default Dashboard

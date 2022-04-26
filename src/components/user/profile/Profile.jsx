import React, { Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux'
import MetaData from '../../MetaData'
import Loader from '../../layout/loading/Loader'
import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import './Profile.css'

const Profile = () => {
  const navigate = useNavigate()
  const { user, loading, isAuthenticated } = useSelector(
    (state) => state.userReducer
  )

  if (isAuthenticated === false) {
    navigate('/login')
  }

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user.name}'s Profile`} />

          <Box
            sx={{
              position: 'relative',
              top: '11vh',
              padding: '5vh 5vh 10vh 5vh',
              width: '300px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <h1>{user.name}'s Profile</h1>
            <Box sx={{ margin: '10px 0' }}>
              <h4>Name</h4>
              <p>{user.name}</p>
            </Box>
            <Box sx={{ margin: '10px 0' }}>
              <h4>Email</h4>
              <p>{user.email}</p>
            </Box>
            <Box sx={{ margin: '10px 0' }}>
              <h4>Joined On</h4>
              <p>{String(user.createdAt).substr(0, 10)}</p>
            </Box>
            <Box sx={{ margin: '10px 0' }}>
              <Button
                onClick={() => navigate('/me/update')}
                className='button'
                variant='contained'
                size='small'
                fullWidth
              >
                Edit Profile
              </Button>
            </Box>
            <Box sx={{ margin: '10px 0' }}>
              <Button
                className='button'
                variant='contained'
                size='small'
                fullWidth
                onClick={() => navigate('/password/update')}
              >
                Change Password
              </Button>
            </Box>
            <Button
              className='button'
              variant='contained'
              size='small'
              fullWidth
              onClick={() => navigate('/orders')}
            >
              My Orders
            </Button>
          </Box>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Profile

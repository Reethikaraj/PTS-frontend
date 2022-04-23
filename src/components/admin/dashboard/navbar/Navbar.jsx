import React from 'react'
// import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { TreeView, TreeItem } from '@material-ui/lab'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PostAddIcon from '@mui/icons-material/PostAdd'
import AddIcon from '@mui/icons-material/Add'
import DashboardIcon from '@mui/icons-material/Dashboard'
import { Box } from '@mui/material'
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone'
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone'
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone'
import RateReviewTwoToneIcon from '@mui/icons-material/RateReviewTwoTone'
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Box
      className='adminNavbar'
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        width: '100%',
      }}
    >
      <Box
        className='tooltip'
        sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
      >
        <LocalMallTwoToneIcon className='icon' onClick={() => navigate('/')} />
        <span className='tooltiptext'>Orders</span>
      </Box>
      <Box className='tooltip' sx={{ flexGrow: 1 }}>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={
            <AddShoppingCartTwoToneIcon sx={{ fontSize: 'large' }} />
          }
        >
          <TreeItem nodeId='1'>
            <TreeItem nodeId='2' label='All' icon={<PostAddIcon />} />
            <TreeItem nodeId='3' label='Create' icon={<AddIcon />} />
          </TreeItem>
        </TreeView>
        <span className='tooltiptext'>Products</span>
      </Box>

      <Box
        className='tooltip'
        sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
      >
        <AssignmentIndTwoToneIcon
          className='icon'
          onClick={() => navigate('/orders')}
        />
        <span className='tooltiptext'>Users</span>
      </Box>

      <Box
        className='tooltip'
        sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
      >
        <RateReviewTwoToneIcon
          className='icon'
          onClick={() => navigate('/contact')}
        />
        <span className='tooltiptext'>Reviews</span>
      </Box>

      <Box
        className='tooltip'
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <DashboardIcon className='icon' onClick={() => navigate('/admin')} />
        <span className='tooltiptext'>Admin</span>
      </Box>
    </Box>
  )
}

export default Navbar

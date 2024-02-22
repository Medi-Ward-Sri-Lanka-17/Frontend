import React from 'react'
import Header from '../../Component/Header'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const AdminPanel = () => {
  // Set use Navigate
  const navigate = useNavigate()

  //Handle summit add staff button
  function handleSubmit() {
    navigate('/admin/staff/add')
  }

  return (
    <Box>
      <Header title="Admin Panel" />
      <Button onClick={() => handleSubmit()}>Add Staff</Button>
    </Box>
  )
}

export default AdminPanel

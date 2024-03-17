import React from 'react'
import { useAuth } from '../utils/hook/useAuth'

const AdminDashboard = () => {
  const { user, login, logout } = useAuth();
  return (
    <>AdminDashboard</>
  )
}

export default AdminDashboard
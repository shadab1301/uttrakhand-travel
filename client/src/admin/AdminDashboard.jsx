import React from 'react'
import { useAuth } from '../utils/hook/useAuth'

const AdminDashboard = () => {
  const { user, login, logout } = useAuth();
  return (
    <div>AdminDashboard</div>
  )
}

export default AdminDashboard
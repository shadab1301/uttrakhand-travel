
import { Route, Routes } from 'react-router-dom';
import { AdminLayout } from './admin/Layout/AdminLayout';
import { UserLayout } from './user/Layout/UserLayout';
import HomePage from './user/Pages/HomePage';
import AdminDashboard from './admin/AdminDashboard.jsx';
import { AuthProvider } from './utils/hook/useAuth.jsx';
import Login from './admin/Login.jsx';

function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App

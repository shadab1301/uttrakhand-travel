
import { Route, Routes } from 'react-router-dom';
import AdminLayout from './admin/Layout/AdminLayout';
import { UserLayout } from './user/Layout/UserLayout';
import HomePage from './user/Pages/HomePage';
import { AuthProvider } from './utils/hook/useAuth.jsx';
import Login from './admin/Login.jsx';
import AdminDashboard from './admin/Dashboard/AdminDashboard.jsx';
import Packages from './admin/Packages/Packages.jsx';
import Home from './Components/Home/Home';
import { Contact } from './Components/Contact/Contact';
function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="packages" element={<Packages />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App

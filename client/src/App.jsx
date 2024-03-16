
import { Route, Routes } from 'react-router-dom';
import AdminLayout from './admin/Layout/AdminLayout';
import { UserLayout } from './user/Layout/UserLayout';
import { AuthProvider } from './utils/hook/useAuth.jsx';
import Login from './admin/Login.jsx';
import AdminDashboard from './admin/Dashboard/AdminDashboard.jsx';
import Packages from './admin/Packages/Packages.jsx';

import Home from './user/Pages/Home/Home.jsx';
import { Contact } from './user/Pages/Contact/Contact.jsx';
import { About } from './user/Pages/Contact/About.jsx';
import { Gallery } from './user/Pages/Gallery/Gallery.jsx';
import List from './user/Pages/List/List.jsx';
import Detail from './user/Pages/Detail/Detail.jsx';
import Testimonial from './admin/Testimonial/Testimonial.jsx';
import Address from './admin/Address/Address.jsx';
import Destination from './admin/Destination/Destination.jsx';
import Enquiry from './admin/Enquiry/Enquiry.jsx';
import AdminGallery from "./admin/Gallery/AdminGallery.jsx";
function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/list" element={<List />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="packages" element={<Packages />} />
            <Route path="enquiry" element={<Enquiry />} />
            <Route path="destination" element={<Destination />} />
            <Route path="gallery" element={<AdminGallery />} />
            <Route path="address" element={<Address />} />
            <Route path="testimonial" element={<Testimonial />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';  
import RegisterForm from './pages/RegisterForm';  
import CustomerPage from './pages/CustomerPage';
import CustomerForm from './components/CustomerForm';
import CustomerDetailPage from './pages/CustomerDetailPage';
import BookRide from "./components/BookRide";
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import BookingList from './components/BookingList';
import CarForm from './components/CarForm';
import ModifyCar from "./components/ModifyCar";
import HomePage from "./components/HomePage"; 
// Add the Customer Dashboard and CarListPage
import CarListPage from './pages/CarListPage';  // Import the CarListPage
import BookingPage from './components/BookingPage';
import PaymentGateway from './components/PaymentGateway';
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default Login Page */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Register Page */}
       {/* // <Route path="/register" element={<RegisterForm />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterForm />} />
        {/* Customer Routes */}
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/customers/form/:id?" element={<CustomerForm />} />
        <Route path="/customers/:id" element={<CustomerDetailPage />} />
        

<Route path="/payment" element={<PaymentGateway />} />
        {/* Customer Dashboard - CarListPage */}
        <Route path="/customer-dashboard" element={<CarListPage />} />  {/* Add route for CarListPage */}

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/bookings" element={<BookingList />} />
        <Route path="/admin/addCar" element={<CarForm />} />
        <Route path="/book-ride" element={<BookRide />} /> {/* Add Route */}
        {/* Modify cars */}
        <Route path="/admin/modifyCar/:id" element={<ModifyCar />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

export default App;

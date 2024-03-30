import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HomePage from './pages/HomePage/HomePage';
import DiagnosisPage1 from './pages/DiagnosisPage1/DiagnosisPage1';
import DiagnosisPage2 from './pages/DiagnosisPage2/DiagnosisPage2';
import DiagnosisPage3 from './pages/DiagnosisPage3/DiagnosisPage3';
import BookingPage from './pages/BookingPage/BookingPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/diagnosis1" element={<DiagnosisPage1 />} />
          <Route path="/diagnosis2" element={<DiagnosisPage2 />} />
          <Route path="/diagnosis3" element={<DiagnosisPage3 />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

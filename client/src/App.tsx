import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import WeightProgressPage from './components/Dashboard/WeightProgressPage';
import ShipmentsPage from './components/Dashboard/ShipmentsPage';
import ProfilePage from './components/Dashboard/ProfilePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/weight-progress" element={<ProtectedRoute><WeightProgressPage /></ProtectedRoute>} />
          <Route path="/shipments" element={<ProtectedRoute><ShipmentsPage /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Login from './views/Login';
import Signup from './views/Signup';
import Dashboard from "./views/Dashboard";
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;
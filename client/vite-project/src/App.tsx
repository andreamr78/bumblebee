import { Routes, Route } from "react-router-dom";
import Login from './views/Login';
import Signup from './views/Signup';
import Dashboard from "./views/Dashboard";
import PrivateRoute from './components/PrivateRoute';
import Swipe from './views/Swipe';
import Watched from "./views/Watched";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/*<Route path="/dashboard" element={<Dashboard />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/swipe" element={ <Swipe /> } />*/}
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/watched" element={<PrivateRoute><Watched /></PrivateRoute>} />
        <Route path="/swipe" element={<PrivateRoute><Swipe /></PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;
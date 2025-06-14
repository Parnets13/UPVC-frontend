import Dashboard from './components/Admin/Dashboard';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      {/* Only renders Dashboard at /dashboard */}
      <Route path="/dashboard" element={<Dashboard/>} />
      {/* Other routes */}
    </Routes>
  );
}

export default App;
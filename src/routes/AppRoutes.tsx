import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const Home = () => <div>Home</div>;
const Dashboard = () => <div>Dashboard</div>;
const Settings = () => <div>Settings</div>;

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRoutes;

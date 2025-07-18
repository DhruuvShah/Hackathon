import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Programs from '../pages/Programs';
import ProgramDetail from '../pages/ProgramDetail';
import About from '../pages/About';
import Login from '../pages/Login';
import AuthWrapper from './AuthWrapper';
import UnauthWrapper from './UnauthWrapper';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<UnauthWrapper />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<AuthWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:id" element={<ProgramDetail />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}


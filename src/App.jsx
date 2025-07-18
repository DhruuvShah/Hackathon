import { AuthProvider } from './contexts/AuthContext';
import { ProgramProvider } from './contexts/ProgramContext';
import Layout from './components/Layout';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <AuthProvider>
      <ProgramProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </ProgramProvider>
    </AuthProvider>
  );
}

export default App;


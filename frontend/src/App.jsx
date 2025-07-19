import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <div className="antialiased">
      <Nav />
      <main>
        <MainRoutes />
      </main>
      <Footer />
    </div>
  );
}
export default App;
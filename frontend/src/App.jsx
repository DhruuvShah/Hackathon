import Nav from './components/Nav';
import Footer from './components/Footer';
import MainRoutes from './routes/Mainroutes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="antialiased">
      <Nav />

      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}  
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastStyle={{
          background: "rgba(30, 41, 59, 0.75)",
          color: "#fff",
          // borderRadius: "1.2rem",
          boxShadow: "0 8px 32px 0 rgba(31,38,135,0.30)",
          backdropFilter: "blur(6px)",
          border: "1.5px solid rgba(255,255,255,0.12)",
          fontWeight: 600,
          fontSize: "1rem",
          letterSpacing: "0.02em",
          padding: "1.2rem 1.6rem",
          minWidth: "260px",
          maxWidth: "90vw"
        }}
        bodyClassName="!flex !items-center !justify-between"
        icon={false}
      />
      <main>
        <MainRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;

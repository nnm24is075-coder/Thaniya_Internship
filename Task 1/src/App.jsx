import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Sidebar />

      <div className="main-content">
        <Header />
        <Dashboard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
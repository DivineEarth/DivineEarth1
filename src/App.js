import logo from './images/logo/logo.png';
import './App.css';
import Header from "./Components/Layout/Header";
import Sidebar from "./Components/Layout/Sidebar";
import Footer from "./Components/Layout/Footer"
import DashboardHome from './Components/Dashboard/DashboardHome';

function App() {
  return (
    <div className="App">
      <Header/>
      <DashboardHome/>
      <Sidebar/>
      <Footer/>
    </div>
  );
}

export default App;

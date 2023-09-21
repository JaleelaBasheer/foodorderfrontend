import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import LoginPage from './pages/LoginPage'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import OrderNow from './pages/OrderNow';
import MyOrders from './pages/MyOrders';
import Admin from './pages/Admin';



function App() {
  return (
    < >
    <Routes>
    <Route path ='/' element = {<Home/>}/>
    <Route path ='/login' element = {<LoginPage/>}/>
    <Route path ='/signup' element = {<SignUp/>}/>
    <Route path ='/dashboard' element = {<Dashboard/>}/>
    <Route path ='/ordernow/:id' element = {<OrderNow/>}/>
    <Route path ='/myorders' element = {<MyOrders/>}/>
    <Route path ='/admin' element = {<Admin/>}/>
    </Routes>
    
    <Footer></Footer>
      
    </>
  );
}

export default App;

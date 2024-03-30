import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import ServiceComponent from './components/ServiceComponent';
import ContactComponent from './components/ContactComponent';


import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from "react-router";



function App() {  
  return (
    <div >
      <HeaderComponent />
         <Router> 
              <div className="container">
                   <Routes>
                        <Route exact path = "/"  element={<HomeComponent/>}></Route>
                        <Route exact path = "/home"  element={<HomeComponent/>}></Route>
                        <Route exact path = "/about"  element={<AboutComponent/>}></Route>
                        <Route exact path = "/service"  element={<ServiceComponent/>}></Route>
                        <Route exact path = "/contact"  element={<ContactComponent/>}></Route>


                         {/* <Route exact path = "/"  element={<ListEmployeeComponent/>}></Route>
                         <Route path = "/employees" element={<ListEmployeeComponent/>}></Route>
                         <Route path = "/add-employee" element={<CreateEmployeeComponent/>}></Route>
                         <Route path = "/update-employee/:id" element={<UpdateEmployeeComponent/>}></Route> */}
                   </Routes>
              </div>
         </Router>
     <FooterComponent/>
    </div>
  );
}

export default App;
